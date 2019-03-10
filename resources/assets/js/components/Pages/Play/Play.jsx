import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {
	ws_make_connection,
	createPlayer,
	createRoom,
	joinRoom,
	clearState
} from '../../../actions';
import { push, replace } from 'connected-react-router';
import RoomModel from '../../../utils/classes/Room';

import Page from '../Page';
import PlayAvatarForm from './PlayAvatarForm';
import PlayUsernameForm from './PlayUsernameForm';
import PlayRules from './PlayRules';

import { mapValues as _mapValues } from 'lodash';

class Play extends Component {
	constructor(props) {
		super(props);

		this.sketchpadRef = React.createRef();

		this.roomUUID = this.props.match.params.roomUUID;
		this.hasRoomUUID = typeof this.roomUUID !== 'undefined' && this.roomUUID;

		this.queryString = queryString.parse(props.location.search);

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
			errors: { avatar: null, username: null, general: null }
		};
	}

	componentDidMount() {
		if (!this.props.socket.fd && !this.props.socket.connected) {
			this.props.ws_make_connection('game');
		}
		// if connected to room clear state and disconnect from room
		this.props.clearState();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.room.id != this.props.room.id) {
			const roomModel = new RoomModel(this.props.room);
			if (roomModel.isReady()) {
				roomModel.isJoined() ? this.props.replace('/room') : this.props.push('/room');
			}
		}
	}

	handleSubmit = async e => {
		const { username, valid: usernameFormValid } = this.state.usernameForm;
		const { valid: avatarFormValid } = this.state.avatarForm;
		const { value: startType } = e.currentTarget;

		e.preventDefault();

		if (!usernameFormValid) {
			return this.setState(({ usernameForm }) => ({
				usernameForm: { ...usernameForm, pristine: false }
			}));
		} else if (!avatarFormValid) return;

		const avatar = await this.createAvatarImage();

		const data = {
			username,
			avatar
		};

		return this.props
			.createPlayer(data)
			.then(response => {
				switch (startType) {
					case 'create_room': {
						this.props.createRoom();
						break;
					}
					case 'random_room': {
						break;
					}
					case 'join_room': {
						this.props.joinRoom({ room: { uuid: this.props.match.params.roomUUID } });
						break;
					}
					default:
						break;
				}
			})
			.catch(error => {
				console.log(error);
				console.log(error.response);
				this.setState(prevState => ({
					errors: { ..._mapValues(error.response.data.error, v => v[0] || null) }
				}));
			});
	};

	createAvatarImage = () =>
		new Promise((resolve, reject) => {
			this.sketchpadRef.current.canvas.toBlob(blob => {
				resolve(blob);
			});
		});

	onCompleteDrawing = item => {
		this.setState(({ avatarForm }) => ({
			avatarForm: {
				...avatarForm,
				items: [...avatarForm.items, item],
				valid: true
			},
			errors: { avatar: null }
		}));
	};

	onUndo = e => {
		this.setState(({ avatarForm }) => {
			const newItems = [...avatarForm.items].slice(0, -1);
			return {
				avatarForm: {
					...avatarForm,
					items: newItems,
					valid: newItems.length > 0
				},
				errors: { avatar: null }
			};
		});
	};

	onClear = e => {
		this.setState(({ avatarForm }) => ({
			avatarForm: {
				...avatarForm,
				items: [],
				valid: false
			},
			errors: { avatar: null }
		}));
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(({ usernameForm }) => ({
			usernameForm: { ...usernameForm, username, valid: username.length >= 3 },
			errors: { username: null }
		}));
	};

	handleFocusUsername = e => {
		const { type } = e;

		this.setState(({ usernameForm }) => ({
			usernameForm: {
				...usernameForm,
				focused: type === 'focus',
				pristine: type === 'blur' ? false : usernameForm.pristine
			}
		}));
	};

	render() {
		const { avatarForm, usernameForm, errors } = this.state;
		const { player, room } = this.props;
		return (
			<Page title="Play game - Drawthing" className="container-fluid page-start-game">
				<div className="game-start-container container">
					<div className="game-start-card rounded shadow">
						<h1 className="game-start-heading">Start new game</h1>

						<PlayAvatarForm
							{...avatarForm}
							sketchpadRef={this.sketchpadRef}
							onCompleteDrawing={this.onCompleteDrawing}
							onUndo={this.onUndo}
							onClear={this.onClear}
							errors={errors}
						/>

						<PlayUsernameForm
							{...usernameForm}
							handleSubmit={this.handleSubmit}
							handleChangeUsername={this.handleChangeUsername}
							handleFocusUsername={this.handleFocusUsername}
							errors={errors}
							hasRoomUUID={this.hasRoomUUID}
							buttonStatus={room.creating || room.joining || player.creating}
						/>
						{errors.general && (
							<small class="help-text d-block text-center text-danger">
								<i class="fa fa-exclamation-circle mr-2" aria-hidden="true" />
								{errors.general}
							</small>
						)}
					</div>
					<PlayRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room, socket: state.socket }),
	{ ws_make_connection, createPlayer, createRoom, joinRoom, push, replace, clearState }
)(Play);
