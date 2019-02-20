import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createPlayer, ws_make_connection } from '../../../actions';
import { push } from 'connected-react-router';

import Page from '../Page';
import PlayAvatarForm from './PlayAvatarForm';
import PlayUsernameForm from './PlayUsernameForm';
import PlayRules from './PlayRules';

import { mapValues as _mapValues } from 'lodash';
import { merge as _fp_merge } from 'lodash/fp';

class Play extends Component {
	constructor(props) {
		super(props);

		this.sketchpadRef = React.createRef();

		this.state = {
			avatarForm: {
				width: 300,
				height: 300,
				tool: 'pencil',
				size: 5,
				color: '#151515',
				fillColor: '#fdffff',
				items: [],
				animate: false,
				eraser: false,
				gtDefaultPosition: { x: -24, y: -155 },
				gtShow: false,
				valid: false
			},
			usernameForm: {
				username: '',
				focused: false,
				valid: false,
				pristine: true
			},
			errors: { avatar: null, username: null }
		};
	}

	componentDidMount() {
		this.props.ws_make_connection('game');
	}

	componentDidUpdate(prevProps) {
		const { id, creating, created, createError } = this.props.room;
		if (prevProps.room.id != id && creating == false && created && createError == null) {
			this.props.push('/room');
		}
	}

	handleSubmit = async e => {
		const { username, valid: usernameFormValid } = this.state.usernameForm;
		const { valid: avatarFormValid } = this.state.avatarForm;
		const { value: startType } = e.target;

		e.preventDefault();

		if (!usernameFormValid) {
			return this.setState(prevState =>
				_fp_merge(prevState, { usernameForm: { pristine: false } })
			);
		} else if (!avatarFormValid) return;

		const avatar = await this.createAvatarImage();

		const data = {
			username,
			avatar,
			startType
		};

		this.props.createPlayer(data).catch(error => {
			console.log(error);

			this.setState(prevState =>
				_fp_merge(prevState, {
					errors: { ..._mapValues(error.response.data.error, v => v[0] || null) }
				})
			);
		});
	};

	createAvatarImage = () =>
		new Promise((resolve, reject) => {
			this.sketchpadRef.current.canvas.toBlob(blob => {
				resolve(blob);
			});
		});

	onCompleteDrawing = item => {
		this.setState(prevState =>
			_fp_merge(prevState, {
				avatarForm: { items: prevState.avatarForm.items.concat([item]), valid: true },
				errors: { avatar: null }
			})
		);
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(prevState =>
			_fp_merge(prevState, {
				usernameForm: { username, valid: username.length > 3 },
				errors: { username: null }
			})
		);
	};

	handleFocusUsername = e => {
		const { type } = e;

		this.setState(prevState =>
			_fp_merge(prevState, {
				usernameForm: {
					focused: type === 'focus',
					pristine: type === 'blur' ? false : prevState.usernameForm.pristine
				}
			})
		);
	};

	render() {
		const { avatarForm, usernameForm, errors } = this.state;
		const { player } = this.props;

		return (
			<Page title="Play game - Drawthing" className="container-fluid page-start-game">
				<div className="game-start-container container">
					<div className="game-start-card rounded shadow">
						<h1 className="game-start-heading">Start new game</h1>

						<PlayAvatarForm
							{...avatarForm}
							sketchpadRef={this.sketchpadRef}
							onCompleteDrawing={this.onCompleteDrawing}
							errors={errors}
						/>

						<PlayUsernameForm
							{...usernameForm}
							handleSubmit={this.handleSubmit}
							handleChangeUsername={this.handleChangeUsername}
							handleFocusUsername={this.handleFocusUsername}
							errors={errors}
						/>
					</div>
					<PlayRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room }),
	{ createPlayer, ws_make_connection, push }
)(Play);
