import React, { Component } from 'react';

import SketchPad from '../GameCanvas/SketchPad/SketchPad';
import { TOOL_PENCIL } from '../GameCanvas/SketchPad/SketchPadTools';

import GameStartForm from './GameStartForm';

import GameStartRules from './GameStartRules';

import GameTools from '../GameCanvas/GameTools/GameTools';

class GameStart extends Component {
	constructor(props) {
		super(props);
		this.sketchpadRef = React.createRef();
	}

	state = {
		sketchForm: {
			tool: TOOL_PENCIL,
			size: 2,
			color: '#151515',
			fillColor: '#fdffff',
			items: [],
			width: 300,
			height: 300,
			animate: true,
			valid: false,
			eraser: false
		},
		usernameForm: {
			username: '',
			focused: false,
			valid: false,
			pristine: true
		}
	};

	componentDidMount() {
		// const socket = io('http://drawthing.com/', { transports: ['websocket'] });
		// socket.on('error', error => {
		// 	console.log(error);
		// });
		// socket.on('hello', data => {
		// 	console.log(data);
		// });
		// socket.emit('hello', 'world');
		// console.log(this.sketchpadRef.current.canvas);
	}

	createImage = () => {
		// this.sketchpadRef.current.canvas.toBlob(blob => {
		// 	const fd = new FormData();
		// 	fd.append('blob', blob);
		// 	Axios.post(`http://drawthing.com/api/blob`, fd)
		// 		.then(res => {
		// 			console.log(res);
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		});
		// });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { username, valid: usernameFormValid } = this.state.usernameForm;
		const { valid: sketchFormValid } = this.state.sketchForm;

		if (!usernameFormValid) {
			this.setState(prevState => ({
				usernameForm: { ...prevState.usernameForm, pristine: false }
			}));
			return;
		} else if (!sketchFormValid) return;

		const startType = e.target.value;

		this.createImage();

		// console.log(this.state);
	};

	onCompleteDrawing = item => {
		this.setState(prevState => ({
			sketchForm: {
				...prevState.sketchForm,
				items: prevState.sketchForm.items.concat([item]),
				valid: true
			}
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
			}
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

	handleTool = e => {
		if (e.type == 'eraser') {
			this.setState(prevState => ({
				sketchForm: {
					...prevState.sketchForm,
					eraser: !prevState.sketchForm.eraser
				}
			}));
		} else if (e.type == 'clear') {
			this.setState(prevState => ({
				sketchForm: { ...prevState.sketchForm, items: [] }
			}));
		} else {
			this.setState(prevState => ({
				sketchForm: {
					...prevState.sketchForm,
					[e.type]: e.value
				}
			}));
		}
	};

	render() {
		const { sketchForm, usernameForm } = this.state;
		return (
			<div className="game-start-container container">
				{/* <GameTools defaultPosition={{ x: 0, y: -60 }} /> */}
				<GameTools
					defaultPosition={{ x: 555, y: 0 }}
					show={true}
					handleTool={this.handleTool}
					{...this.state.sketchForm}
				/>

				<div className="game-start-card rounded shadow">
					<h1 className="game-start-heading">Start new game</h1>
					<div className="game-start-canvas-container">
						<SketchPad
							{...sketchForm}
							onCompleteItem={this.onCompleteDrawing}
							canvasClassName="game-start-canvas rounded"
							ref={this.sketchpadRef}
						>
							<small
								className={`help-text d-block text-center ${
									sketchForm.valid ? '' : 'text-danger'
								}`}
							>
								{sketchForm.valid ? null : (
									<i
										className="fa fa-exclamation-circle mr-2"
										aria-hidden="true"
									/>
								)}
								draw your avatar
							</small>
						</SketchPad>
					</div>
					<GameStartForm
						handleSubmit={this.handleSubmit}
						handleChangeUsername={this.handleChangeUsername}
						handleFocusUsername={this.handleFocusUsername}
						{...usernameForm}
					/>
				</div>
				<GameStartRules />
			</div>
		);
	}
}

export default GameStart;
