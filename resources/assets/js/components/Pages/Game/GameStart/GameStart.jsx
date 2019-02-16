import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlayer, resetGameStartFormErrors } from '../../../../actions';

import GameStartUsername from './GameStartUsername';
import GameStartAvatar from './GameStartAvatar';
import GameStartRules from './GameStartRules';

import { forOwn as _forOwn } from 'lodash';
import GameCreatedRoom from './GameCreatedRoom/GameCreatedRoom';

class GameStart extends Component {
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
			}
		};
	}

	createAvatarImage = () =>
		new Promise((resolve, reject) => {
			this.sketchpadRef.current.canvas.toBlob(blob => {
				resolve(blob);
			});
		});

	handleSubmit = async e => {
		e.preventDefault();
		const { username, valid: usernameFormValid } = this.state.usernameForm;
		const { valid: avatarFormValid } = this.state.avatarForm;
		const { value: startType } = e.target;

		if (!usernameFormValid) {
			this.setState(prevState => ({
				usernameForm: { ...prevState.usernameForm, pristine: false }
			}));
			return;
		} else if (!avatarFormValid) return;

		const avatar = await this.createAvatarImage();

		const data = {
			username,
			avatar,
			startType
		};

		this.props.createPlayer(data);
	};

	onCompleteDrawing = item => {
		this.setState(
			prevState => ({
				avatarForm: {
					...prevState.avatarForm,
					items: prevState.avatarForm.items.concat([item]),
					valid: true
				}
			}),
			this.props.resetGameStartFormErrors
		);
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(
			prevState => ({
				usernameForm: {
					...prevState.usernameForm,
					username,
					valid: username.length > 3
				}
			}),
			this.props.resetGameStartFormErrors
		);
	};

	handleFocusUsername = e => {
		const { type } = e;

		this.setState(prevState => ({
			usernameForm: {
				...prevState.usernameForm,
				focused: type === 'focus',
				pristine: type === 'blur' ? false : prevState.usernameForm.pristine
			}
		}));
	};

	render() {
		const { avatarForm, usernameForm } = this.state;
		const { room, player, formErrors } = this.props.gameStart;
		return (
			<div className="game-start-container container">
				<div className="game-start-card rounded shadow">
					{player.created && player.connectedToRoom && room.created ? (
						<GameCreatedRoom player={player} room={room} />
					) : (
						<React.Fragment>
							<h1 className="game-start-heading">Start new game</h1>

							<GameStartAvatar
								{...avatarForm}
								sketchpadRef={this.sketchpadRef}
								onCompleteDrawing={this.onCompleteDrawing}
								formErrors={formErrors}
							/>

							<GameStartUsername
								{...usernameForm}
								handleSubmit={this.handleSubmit}
								handleChangeUsername={this.handleChangeUsername}
								handleFocusUsername={this.handleFocusUsername}
								formErrors={formErrors}
							/>
						</React.Fragment>
					)}
				</div>

				<GameStartRules />
			</div>
		);
	}
}

export default connect(
	state => ({ gameStart: state.gameStartReducer }),
	{ createPlayer, resetGameStartFormErrors }
)(GameStart);
