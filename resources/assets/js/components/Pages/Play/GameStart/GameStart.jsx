import React, { Component } from 'react';

import GameStartUsername from './GameStartUsername';
import GameStartAvatar from './GameStartAvatar';

import { mapValues as _mapValues } from 'lodash';

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
			},
			errors: { avatar: null, username: null }
		};
	}

	createAvatarImage = () =>
		new Promise((resolve, reject) => {
			this.sketchpadRef.current.canvas.toBlob(blob => {
				resolve(blob);
			});
		});

	handleSubmit = async e => {
		const { username, valid: usernameFormValid } = this.state.usernameForm;
		const { valid: avatarFormValid } = this.state.avatarForm;
		const { value: startType } = e.target;

		e.preventDefault();

		if (!usernameFormValid) {
			return this.setState(prevState => ({
				usernameForm: { ...prevState.usernameForm, pristine: false }
			}));
		} else if (!avatarFormValid) return;

		const avatar = await this.createAvatarImage();

		const data = {
			username,
			avatar,
			startType
		};

		this.props.createPlayer(data).catch(error => {
			console.log(error);
			this.setState(prevState => ({
				errors: { ...prevState.errors, ..._mapValues(error.response.data.error, v => v[0] || null) }
			}));
		});
	};

	onCompleteDrawing = item => {
		this.setState(prevState => ({
			avatarForm: {
				...prevState.avatarForm,
				items: prevState.avatarForm.items.concat([item]),
				valid: true
			},
			errors: { ...prevState.errors, avatar: null }
		}));
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(prevState => ({
			usernameForm: {
				...prevState.usernameForm,
				username,
				valid: username.length > 3
			},
			errors: { ...prevState.errors, username: null }
		}));
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
		const { avatarForm, usernameForm, errors } = this.state;
		return (
			<React.Fragment>
				<h1 className="game-start-heading">Start new game</h1>

				<GameStartAvatar
					{...avatarForm}
					sketchpadRef={this.sketchpadRef}
					onCompleteDrawing={this.onCompleteDrawing}
					errors={errors}
				/>

				<GameStartUsername
					{...usernameForm}
					handleSubmit={this.handleSubmit}
					handleChangeUsername={this.handleChangeUsername}
					handleFocusUsername={this.handleFocusUsername}
					errors={errors}
				/>
			</React.Fragment>
		);
	}
}

export default GameStart;
