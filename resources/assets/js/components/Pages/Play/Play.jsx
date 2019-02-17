import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createPlayer, sendMessageRoom, subscribeToRoomChat } from '../../../actions';

import Page from '../Page';

import GameStart from './GameStart/GameStart';
import GameStartRules from './GameStart/GameStartRules';

import GameRoom from './GameRoom/GameRoom';

class Play extends Component {
	constructor(props) {
		super(props);
		this.subscribedToRoomChat = false;
	}

	handleChatSend = e => {
		e.preventDefault();
		const message = e.target.elements['game-board-chat-input'].value;

		if (!this.subscribedToRoomChat) {
			this.props.subscribeToRoomChat();
			this.subscribedToRoomChat = true;
		}

		this.props.sendMessageRoom({ text: message });
		e.target.reset();
	};

	render() {
		const { player, room, chat, createPlayer } = this.props;
		// console.log(player);
		// console.log(room);
		// console.log(chat);
		let renderCmp = <GameStart createPlayer={createPlayer} />;

		if (room.connected && room.created) {
			renderCmp = (
				<GameRoom player={player} room={room} chat={chat} handleChatSend={this.handleChatSend} />
			);
		}

		return (
			<Page title="Play game - Drawthing" className="container-fluid page-start-game">
				<div className="game-start-container container">
					<div className="game-start-card rounded shadow">{renderCmp}</div>
					<GameStartRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room, chat: state.chat }),
	{ createPlayer, sendMessageRoom, subscribeToRoomChat }
)(Play);
