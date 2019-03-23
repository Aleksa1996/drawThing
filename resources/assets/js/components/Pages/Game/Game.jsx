import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	subscribeToGameGlobalEvents,
	unsubscribeToGameGlobalEvents,
	sketchDraw,
	sketchUndo,
	sketchClear,
	sendMessageRoom,
	clearState,
	clearSubscriptions,
	showModal,
	leaveRoom,
	startGame,
	requestWordsToChoose
} from '../../../actions';
import { push, replace } from 'connected-react-router';

import RoomModel from '../../../utils/classes/Room';
import ChatModel from '../../../utils/classes/Chat';
import PlayerModel from '../../../utils/classes/Player';
import GameModel from '../../../utils/classes/Game';

import Page from '../Page';

import GameLayout from './GameLayout';
import GameToolBar from './GameToolBar/GameToolBar';

import GameScore from './GameScore/GameScore';
import GameCanvas from './GameCanvas/GameCanvas';
import GameChat from './GameChat/GameChat';

import { CHOOSE_WORD_MODAL } from '../../Common/Modal/modalTypes';

class Game extends Component {
	constructor(props) {
		super(props);

		this.sketchpadRef = React.createRef();
		this.chatBodyRef = React.createRef();

		this.subscribedToGameGlobalEvents = false;

		this.state = {
			sketchpad: {
				width: 900,
				height: 900,
				tool: 'pencil',
				size: 5,
				color: '#151515',
				fillColor: '#fdffff',
				animate: true,
				eraser: false,

				gtDefaultPosition: { x: 0, y: 0 },
				gtShow: false,
				canvasDisabled: false
			}
		};
	}

	componentDidMount() {
		const { player, room, game, replace, socket, subscribeToGameGlobalEvents } = this.props;

		const roomModel = new RoomModel(room);
		const gameModel = new GameModel(game);
		try {
			// redirect if socket is not connected
			if (!socket.connected) throw new Error('Socket not connected');

			// listen for chat and room events when room is created or joined
			if (roomModel.isReady()) {
				if (!this.subscribedToGameGlobalEvents) {
					subscribeToGameGlobalEvents();
					this.subscribedToGameGlobalEvents = true;
				}
			} else throw new Error('Room is not ready');
			this.updateDrawingUI();
		} catch (e) {
			console.log(e);
			replace('/play');
		}
	}

	componentDidUpdate(prevProps) {
		// chat always scroll on new message to see the latest one
		const { chat, game } = this.props;
		if (chat.messages.length != prevProps.chat.messages.length && chat.messages.length > 0) {
			this.scrollToBottom();
		}

		if (prevProps.game.drawn_by != game.drawn_by) {
			this.updateDrawingUI();
		}

		if (game.status == 'ROUND_START') {
			// this.props.roundStart();
			// flag da je runda pocela
			// startuje timer 3min
			//
		}
	}

	componentWillUnmount() {
		// clear whole room state
		this.props.leaveRoom();
		this.props.clearState();
		this.props.clearSubscriptions();
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

	updateDrawingUI = () => {
		const isPlayerDrawing =
			this.props.game.drawn_by && this.props.game.drawn_by == this.props.player.id;

		if (isPlayerDrawing) {
			this.props.requestWordsToChoose();
			this.props.showModal({
				modalType: CHOOSE_WORD_MODAL,
				modalProps: {}
			});
		}

		this.setState(({ sketchpad }) => ({
			sketchpad: {
				...sketchpad,
				canvasDisabled: !isPlayerDrawing,
				animate: !isPlayerDrawing
			}
		}));
	};

	onCompleteDrawing = item => this.props.sketchDraw(item);
	onUndo = e => this.props.sketchUndo();
	onClear = e => this.props.sketchClear();

	handleChatSend = (e, additionalData = null) => {
		e.preventDefault();
		const { player, game } = this.props;
		const gameModel = new GameModel(game);

		if (gameModel.isPlayerDrawing(player)) return false;

		let message = '';
		// Message comes from text input
		if (e.type == 'submit') {
			message = e.target.elements['game-board-chat-input'].value;
			if (message && message.length <= 0) return false;
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
		const gameModel = new GameModel(game);

		return (
			<Page title="Game - Drawthing" className="container-fluid page-game">
				<GameLayout>
					<GameToolBar game={gameModel} player={playerModel} />
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
							player={playerModel}
							room={roomModel}
							chat={chatModel}
							game={gameModel}
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
		clearState,
		clearSubscriptions,
		showModal,
		leaveRoom,
		startGame,
		sketchDraw,
		sketchUndo,
		sketchClear,
		subscribeToGameGlobalEvents,
		unsubscribeToGameGlobalEvents,
		requestWordsToChoose
	}
)(Game);
