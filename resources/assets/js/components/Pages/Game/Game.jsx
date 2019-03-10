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
	sketchDraw,
	sketchUndo,
	sketchClear,
	subscribeToGameGlobalEvents,
	unsubscribeToGameGlobalEvents
} from '../../../actions';
import { push, replace } from 'connected-react-router';

import RoomModel from '../../../utils/classes/Room';
import ChatModel from '../../../utils/classes/Chat';
import PlayerModel from '../../../utils/classes/Player';

import Page from '../Page';

import GameLayout from './GameLayout';
import GameToolBar from './GameToolBar/GameToolBar';

import GameScore from './GameScore/GameScore';
import GameCanvas from './GameCanvas/GameCanvas';
import GameChat from './GameChat/GameChat';

class Game extends Component {
	constructor(props) {
		super(props);

		this.sketchpadRef = React.createRef();
		this.chatBodyRef = React.createRef();

		this.subscribedToGameGlobalEvents = false;

		this.state = {
			sketchpad: {
				width: 900,
				height: 700,
				tool: 'pencil',
				size: 5,
				color: '#151515',
				fillColor: '#fdffff',
				// items: [],
				animate: true,
				eraser: false,

				gtDefaultPosition: { x: 0, y: 0 },
				gtShow: false
			}
		};
	}

	componentDidMount() {
		const {
			room,
			chat,
			replace,
			socket,
			subscribeToGameGlobalEvents,
			unsubscribeToGameGlobalEvents
		} = this.props;

		const roomModel = new RoomModel(room);
		try {
			// redirect if socket is not connected
			if (!socket.connected) throw new Error('Socket not connected');

			// listen for chat and room events when room is created or joined
			if (roomModel.isReady()) {
				if (!this.subscribedToGameGlobalEvents) {
					subscribeToGameGlobalEvents();
					this.subscribedToGameGlobalEvents = true;
				}
			} else {
				replace('/play');
			}
		} catch (e) {
			console.log(e);
			replace('/play');
		}
	}

	componentDidUpdate(prevProps) {
		// chat always scroll on new message to see the latest one
		if (
			this.props.chat.messages.length != prevProps.chat.messages.length &&
			this.props.chat.messages.length > 0
		) {
			this.scrollToBottom();
		}
	}

	componentWillUnmount() {
		// clear whole room state
		this.props.leaveRoom();
		this.props.clearState();
	}

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

	onCompleteDrawing = item => this.props.sketchDraw(item);
	onUndo = e => this.props.sketchUndo();
	onClear = e => this.props.sketchClear();

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

	render() {
		const { player, room, chat, game } = this.props;

		const roomModel = new RoomModel(room);
		const chatModel = new ChatModel(chat);
		const playerModel = new PlayerModel(player);

		return (
			<Page title="Game - Drawthing" className="container-fluid page-game">
				<GameLayout>
					<GameToolBar />
					<div className="row no-gutters">
						<GameScore room={roomModel} player={playerModel} />
						<GameCanvas
							{...this.state.sketchpad}
							items={game.drawing.items}
							onCompleteItem={this.onCompleteDrawing}
							onUndo={this.onUndo}
							onClear={this.onClear}
							canvasClassName="game-sketchpad-canvas"
							ref={this.sketchpadRef}
						/>
						<GameChat
							room={roomModel}
							chat={chatModel}
							handleChatSend={this.handleChatSend}
							ref={this.chatBodyRef}
						/>
					</div>
				</GameLayout>
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
		sketchDraw,
		sketchUndo,
		sketchClear,
		subscribeToGameGlobalEvents,
		unsubscribeToGameGlobalEvents
	}
)(Game);
