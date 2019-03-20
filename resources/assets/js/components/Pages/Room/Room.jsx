import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	sendMessageRoom,
	kickPlayer,
	subscribeToChatGlobalEvents,
	subscribeToRoomGlobalEvents,
	clearStateAfterKick,
	clearState,
	showModal,
	leaveRoom,
	startGame,
	clearChatMessages
} from '../../../actions';

import { KICK_PLAYER_MODAL, INFO_MODAL } from '../../Common/Modal/modalTypes';
import { push, replace } from 'connected-react-router';

import RoomModel from '../../../utils/classes/Room';
import ChatModel from '../../../utils/classes/Chat';
import GameModel from '../../../utils/classes/Game';

import Page from '../Page';
import PlayRules from '../Play/PlayRules';

import RoomChat from './RoomChat';
import RoomPlayers from './RoomPlayers';

import Button from '../../Form/Button';

import Countdown from '../../Common/Countdown/Countdown';
import Errors from '../../Common/Errors/Errors';

class Room extends Component {
	constructor(props) {
		super(props);
		this.chatBodyRef = React.createRef();
		this.joinLinkInputRef = React.createRef();
		this.subscribedToRoomChat = false;
	}

	componentDidMount() {
		const {
			room,
			replace,
			socket,
			subscribeToChatGlobalEvents,
			subscribeToRoomGlobalEvents
		} = this.props;

		const roomModel = new RoomModel(room);
		try {
			// redirect if socket is not connected
			if (!socket.connected) throw new Error('Socket not connected');

			// listen for chat and room events when room is created or joined
			if (roomModel.isReady()) {
				if (!this.subscribedToRoomChat) {
					subscribeToChatGlobalEvents();
					subscribeToRoomGlobalEvents();
					this.subscribedToRoomChat = true;
				}
			} else throw new Error('Room is not ready');
		} catch (e) {
			console.log(e);
			replace('/play');
		}
	}

	componentDidUpdate(prevProps) {
		// redirect player to play page and clear data if he is kicked by admin
		if (this.props.room.lastKickedPlayer.id == this.props.player.id) {
			this.props.clearStateAfterKick();
			this.props.showModal({
				modalType: INFO_MODAL,
				modalProps: {
					body: 'You were kicked from the room by admin'
				}
			});
			this.props.push('/play');
			return;
		}

		// chat always scroll on new message to see the latest one
		if (
			this.props.chat.messages.length != prevProps.chat.messages.length &&
			this.props.chat.messages.length > 0
		) {
			this.scrollToBottom();
		}
	}

	componentWillUnmount() {
		if (this.props.game.status == 'NOT_STARTED') {
			// clear whole room state
			this.props.leaveRoom();
			this.props.clearState();
		}
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
		const { player, room, chat, game, clearChatMessages, replace } = this.props;
		const roomModel = new RoomModel(room);
		const chatModel = new ChatModel(chat);
		const gameModel = new GameModel(game);

		const isPlayerAdmin = roomModel.isPlayerAdmin(player);
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
								room={roomModel}
								isPlayerAdmin={isPlayerAdmin}
								player={player}
								handleCopyToClipboard={this.handleCopyToClipboard}
								handleKick={this.handleKick}
								ref={this.joinLinkInputRef}
							/>
							<div className="game-created-chat-container">
								<RoomChat
									room={roomModel}
									chat={chatModel}
									handleChatSend={this.handleChatSend}
									ref={this.chatBodyRef}
								/>
							</div>
							<Errors errors={gameModel.starting_game_request_errors} />
							{isPlayerAdmin && (
								<div className="text-center">
									<Button
										onClick={this.handleStartGame}
										type="button"
										icon="fa-rocket"
										className="mybtn2 my-auto"
										disabled={game.starting_game_request || roomModel.getActivePlayerCount() <= 1}
									>
										{roomModel.getActivePlayerCount() <= 1 ? 'Waiting...' : 'Start game'}
									</Button>
								</div>
							)}
						</div>
					</div>
					<PlayRules />
				</div>
				<Countdown
					countDownFrom={3}
					shouldInitOnMount={false}
					activate={gameModel.starting()}
					countdownEndText="START"
					onCountdownEnd={() => {
						clearChatMessages();
						replace('/game');
					}}
				/>
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
		game: state.game
	}),
	{
		sendMessageRoom,
		push,
		replace,
		subscribeToChatGlobalEvents,
		kickPlayer,
		subscribeToRoomGlobalEvents,
		clearStateAfterKick,
		clearState,
		showModal,
		leaveRoom,
		startGame,
		clearChatMessages
	}
)(Room);
