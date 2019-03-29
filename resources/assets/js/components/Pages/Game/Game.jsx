import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	subscribeToGameGlobalEvents,
	subscribeToRoundGlobalEvents,
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
import RoundModel from '../../../utils/classes/Round';

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
		const {
			room,
			replace,
			socket,
			subscribeToGameGlobalEvents,
			subscribeToRoundGlobalEvents
		} = this.props;

		const roomModel = new RoomModel(room);
		try {
			// redirect if socket is not connected
			if (!socket.connected) throw new Error('Socket not connected');

			// listen for chat and room events when room is created or joined
			if (roomModel.isReady()) {
				if (!this.subscribedToGameGlobalEvents) {
					subscribeToGameGlobalEvents();
					subscribeToRoundGlobalEvents();
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
		const { chat, game, round } = this.props;

		const chatModel = new ChatModel(chat);
		const gameModel = new GameModel(game);
		const roundModel = new RoundModel(round);

		if (chat.messages.length != prevProps.chat.messages.length && chatModel.hasMessages()) {
			this.scrollToBottom();
		}

		if (prevProps.round.drawn_by != round.drawn_by || prevProps.game.id != game.id) {
			this.updateDrawingUI();
		}

		if (roundModel.finished() && gameModel.isCanvasEmpty()) {
			this.props.sketchClear();
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
		const { player, round } = this.props;
		const roundModel = new RoundModel(round);
		const isPlayerDrawing = roundModel.isPlayerDrawing(player);

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

		this.props.sketchClear();
	};

	onCompleteDrawing = item => this.props.sketchDraw(item);
	onUndo = e => this.props.sketchUndo();
	onClear = e => this.props.sketchClear();

	handleChatSend = (e, additionalData = null) => {
		e.preventDefault();
		const { player, round } = this.props;
		const roundModel = new RoundModel(round);

		if (roundModel.isPlayerDrawing(player)) return false;

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
		const { player, room, chat, game, round } = this.props;

		const playerModel = new PlayerModel(player);
		const roomModel = new RoomModel(room);
		const chatModel = new ChatModel(chat);
		const gameModel = new GameModel(game);
		const roundModel = new RoundModel(round);

		return (
			<Page title="Game - Drawthing" className="container-fluid page-game">
				<GameLayout>
					<GameToolBar player={playerModel} round={roundModel} />
					<div className="row no-gutters">
						<GameScore player={playerModel} room={roomModel} />
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
							round={roundModel}
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
		game: state.game,
		round: state.round
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
		subscribeToRoundGlobalEvents,
		requestWordsToChoose
	}
)(Game);
