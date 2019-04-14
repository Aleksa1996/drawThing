import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	sendMessageRoom,
	kickPlayer,
	subscribeToChatGlobalEvents,
	subscribeToRoomGlobalEvents,
	clearState,
	clearSubscriptions,
	showModal,
	leaveRoom,
	startGame,
	clearChatMessages,
	showCountdown,
	hideCountdown
} from '../../../actions';

import { KICK_PLAYER_MODAL, INFO_MODAL } from '../../Common/Modal/modalTypes';
import { push, replace } from 'connected-react-router';

import PlayerModel from '../../../utils/classes/Player';
import RoomModel from '../../../utils/classes/Room';
import ChatModel from '../../../utils/classes/Chat';
import GameModel from '../../../utils/classes/Game';

import Page from '../Page';
import PlayRules from '../Play/PlayRules';

import RoomChat from './RoomChat';
import RoomPlayers from './RoomPlayers';

import Button from '../../Form/Button';
import Errors from '../../Common/Errors/Errors';
import RoomForm from './RoomForm';

class Room extends Component {
	constructor(props) {
		super(props);
		this.chatBodyRef = React.createRef();
		this.joinLinkInputRef = React.createRef();
		this.subscribed = false;
	}

	componentDidMount() {
		const { room, socket } = this.props;
		const roomModel = new RoomModel(room);

		try {
			// redirect if socket is not connected
			if (!socket.connected) throw new Error('Socket not connected');

			// listen for chat and room events when room is created or joined
			if (roomModel.isReady()) {
				if (!this.subscribed) {
					this.props.subscribeToChatGlobalEvents();
					this.props.subscribeToRoomGlobalEvents();
					this.subscribed = true;
				}
			} else throw new Error('Room is not ready');
		} catch (e) {
			console.log(e);
			this.props.replace('/play');
		}
	}

	componentDidUpdate(prevProps) {
		const { player, room, chat, game, countdown } = this.props;
		const roomModel = new RoomModel(room);
		const gameModel = new GameModel(game);
		// redirect player to play page and clear data if he is kicked by admin
		if (roomModel.isPlayerKicked(player)) {
			this.props.clearState();
			this.props.clearSubscriptions();

			this.props.showModal({
				modalType: INFO_MODAL,
				modalProps: {
					body: 'You were kicked from the room by admin'
				}
			});
			return this.props.replace('/play');
		}

		if (gameModel.starting() && !countdown.inProgress) {
			this.props.showCountdown({ countdownFrom: 3, countdownEndText: 'START' }).then(() => {
				this.props.clearChatMessages();
				this.props.replace('/game');
			});
		}

		// chat always scroll on new message to see the latest one
		if (chat.messages.length != prevProps.chat.messages.length && chat.messages.length > 0) {
			this.scrollToBottom();
		}
	}

	componentWillUnmount() {
		const { game } = this.props;
		const gameModel = new GameModel(game);

		if (gameModel.notStarted()) {
			// clear whole room state
			this.props.leaveRoom();
			this.props.clearState();
			this.props.clearSubscriptions();
		}
		this.props.hideCountdown();
	}

	handleChatSend = (e, additionalData = null) => {
		e.preventDefault();
		let message = '';
		// Message comes from text input
		if (e.type == 'submit') {
			message = e.target.elements['game-board-chat-input'].value;
			if (message && message.length <= 0) return;
			e.target.reset();
		}
		// Message comes from emoji dropdown
		else if (e.type == 'click' && additionalData) {
			message = additionalData;
		}

		this.props.sendMessageRoom({ text: message });
	};

	scrollToBottom = () => {
		const { current: el } = this.chatBodyRef;

		if (
			typeof el !== 'undefined' &&
			typeof el.scrollTop !== 'undefined' &&
			typeof el.scrollHeight !== 'undefined'
		) {
			el.scrollTop = el.scrollHeight;
		}
	};

	handleCopyToClipboard = e => {
		// copy to clipboard share link
		this.joinLinkInputRef.current.select();
		document.execCommand('copy');
		e.target.focus();
	};

	handleKick = playerId => {
		//kick player from room by admin
		this.props.showModal({
			modalType: KICK_PLAYER_MODAL,
			modalProps: {
				playerId
			}
		});
	};

	handleStartGame = e => {
		this.props.startGame();
	};

	render() {
		const { player, room, chat, game } = this.props;
		const playerModel = new PlayerModel(player);
		const roomModel = new RoomModel(room);
		const chatModel = new ChatModel(chat);
		const gameModel = new GameModel(game);

		const startGameButtonStatus =
			game.starting_game_request || roomModel.getActivePlayerCount() <= 1 || gameModel.starting();

		if (!roomModel.isCreated() && !roomModel.isJoined()) {
			return null;
		}

		return (
			<Page title="Play game - Drawthing" className="container-fluid page-start-game">
				<div className="game-start-container container">
					<div className="game-start-card rounded shadow">
						<div className="game-created-container">
							<h1 className="game-created-title">
								{roomModel.isCreated() && 'Successfully created room'}
								{roomModel.isJoined() && 'Successfully joined room'}
							</h1>
							<RoomPlayers
								player={playerModel}
								room={roomModel}
								handleCopyToClipboard={this.handleCopyToClipboard}
								handleKick={this.handleKick}
								ref={this.joinLinkInputRef}
							/>
							<RoomForm player={playerModel} room={roomModel} />
							<div className="game-created-chat-container">
								<RoomChat
									room={roomModel}
									chat={chatModel}
									handleChatSend={this.handleChatSend}
									ref={this.chatBodyRef}
								/>
							</div>
							<Errors errors={gameModel.starting_game_request_errors} />
							{roomModel.isPlayerAdmin(player) && (
								<div className="text-center mt-3">
									<Button
										onClick={this.handleStartGame}
										type="button"
										icon="fa-rocket"
										className="mybtn2 my-auto"
										disabled={startGameButtonStatus}
									>
										{roomModel.getActivePlayerCount() <= 1 ? 'Waiting...' : 'Start game'}
									</Button>
								</div>
							)}
						</div>
					</div>
					<PlayRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({
		player: state.player,
		room: state.room,
		chat: state.chat,
		socket: state.socket,
		game: state.game,
		countdown: state.countdown
	}),
	{
		sendMessageRoom,
		push,
		replace,
		subscribeToChatGlobalEvents,
		kickPlayer,
		subscribeToRoomGlobalEvents,
		clearState,
		clearSubscriptions,
		showModal,
		leaveRoom,
		startGame,
		clearChatMessages,
		showCountdown,
		hideCountdown
	}
)(Room);
