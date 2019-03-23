import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {
	ws_make_connection,
	createPlayer,
	createRoom,
	joinRoom,
	clearState,
	clearSubscriptions
} from '../../../actions';
import { push, replace } from 'connected-react-router';
import RoomModel from '../../../utils/classes/Room';
import Errors from '../../../utils/classes/Errors';

import Page from '../Page';
import PlayAvatarForm from './PlayAvatarForm';
import PlayUsernameForm from './PlayUsernameForm';
import PlayRules from './PlayRules';

class Play extends Component {
	constructor(props) {
		super(props);

		this.sketchpadRef = React.createRef();

		this.roomUUID = this.props.match.params.roomUUID;
		this.hasRoomUUID = typeof this.roomUUID !== 'undefined' && this.roomUUID;

		this.queryString = queryString.parse(props.location.search);

		this.state = {
			avatarForm: {
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
			errors: []
		};
	}

	componentDidMount() {
		if (!this.props.socket.fd && !this.props.socket.connected) {
			this.props.ws_make_connection('game');
		}
		// if we came back from room then clear state
		this.props.clearState();
		this.props.clearSubscriptions();
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
			.catch(({ response: { data: { errors } } }) => this.setState({ errors }));
	};

	createAvatarImage = () =>
		new Promise((resolve, reject) => {
			this.sketchpadRef.current.canvas.toBlob(blob => {
				resolve(blob);
			});
		});

	onCompleteDrawing = item => {
		this.setState(({ avatarForm, errors }) => ({
			avatarForm: {
				...avatarForm,
				items: [...avatarForm.items, item],
				valid: true
			},
			errors: Errors.init(errors).remove('avatar')
		}));
	};

	onUndo = e => {
		this.setState(({ avatarForm, errors }) => {
			const newItems = [...avatarForm.items].slice(0, -1);
			return {
				avatarForm: {
					...avatarForm,
					items: newItems,
					valid: newItems.length > 0
				},
				errors: Errors.init(errors).remove('avatar')
			};
		});
	};

	onClear = e => {
		this.setState(({ avatarForm, errors }) => ({
			avatarForm: {
				...avatarForm,
				items: [],
				valid: false
			},
			errors: Errors.init(errors).remove('avatar')
		}));
	};

	handleChangeUsername = e => {
		const {
			target: { value: username }
		} = e;

		this.setState(({ usernameForm, errors }) => ({
			usernameForm: { ...usernameForm, username, valid: username.length >= 3 },
			errors: Errors.init(errors).remove('username')
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
							errors={Errors.init(errors)}
							hasRoomUUID={this.hasRoomUUID}
							buttonStatus={room.creating || room.joining || player.creating}
						/>
					</div>
					<PlayRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room, socket: state.socket }),
	{
		ws_make_connection,
		createPlayer,
		createRoom,
		joinRoom,
		push,
		replace,
		clearState,
		clearSubscriptions
	}
)(Play);
