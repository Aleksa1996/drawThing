import React, { Component } from 'react';

import SketchPad from '../GameCanvas/SketchPad/SketchPad';
import { TOOL_PENCIL } from '../GameCanvas/SketchPad/SketchPadTools';

import GameStartForm from './GameStartForm';

import GameStartRules from './GameStartRules';

class GameStart extends Component {
	state = {
		sketchForm: {
			tool: TOOL_PENCIL,
			size: 2,
			color: '#000000',
			fillColor: '',
			items: [],
			width: 300,
			height: 300,
			animate: true
		},
		usernameForm: {
			username: '',
			focused: false,
			valid: false,
			pristine: true
		}
	};

	handleSubmit = e => {
		e.preventDefault();
		const { username, valid } = this.state.usernameForm;

		if (!valid) {
			this.setState(prevState => ({ usernameForm: { ...prevState.usernameForm, pristine: false } }));
			return;
		}

		const startType = e.target.value;

		console.log(this.state);
	};

	onCompleteDrawing = item => {
		this.setState(prevState => ({ sketchForm: { ...prevState.sketchForm, items: prevState.sketchForm.items.concat([item]) } }));
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(prevState => ({ usernameForm: { ...prevState.usernameForm, username, valid: username.length > 3 } }));
	};

	handleFocusUsername = e => {
		const { type } = e;

		this.setState(prevState => ({
			usernameForm: {
				...prevState.usernameForm,
				focused: type === 'focus',
				pristine: type === 'blur' ? false : prevState.usernameForm.pristine && true
			}
		}));
	};

	render() {
		return (
			<div className="game-start-container container">
				<div className="game-start-card rounded shadow">
					<h1 className="game-start-heading">Start new game</h1>
					<div className="game-start-canvas-container">
						<SketchPad
							{...this.state.sketchForm}
							onCompleteItem={this.onCompleteDrawing}
							canvasClassName="game-start-canvas rounded"
						>
							<small className="help-text d-block text-center">Draw your avatar</small>
						</SketchPad>
					</div>
					<GameStartForm
						handleSubmit={this.handleSubmit}
						handleChangeUsername={this.handleChangeUsername}
						handleFocusUsername={this.handleFocusUsername}
						{...this.state.usernameForm}
					/>
				</div>
				<GameStartRules />
			</div>
		);
	}
}

export default GameStart;
