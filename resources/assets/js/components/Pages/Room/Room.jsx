import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	connectRoom,
	sendMessageRoom,
	subscribeToCreateRoom,
	subscribeToRoomChat
} from '../../../actions';
import { push } from 'connected-react-router';

import Page from '../Page';
import PlayRules from '../Play/PlayRules';

import RoomChat from './RoomChat';
import RoomPlayers from './RoomPlayers';

import Button from '../../Form/Button';

class Room extends Component {
	constructor(props) {
		super(props);
		this.chatBodyRef = React.createRef();
		this.subscribedToRoomChat = false;
		this.joinLinkInputRef = React.createRef();
	}

	componentDidMount() {
		const { room, push, socket, subscribeToCreateRoom, subscribeToRoomChat } = this.props;
		if (socket.connected && room.created && room.createError == null) {
			if (!this.subscribedToRoomChat) {
				subscribeToCreateRoom();
				subscribeToRoomChat();
				this.subscribedToRoomChat = true;
			}
		} else {
			this.props.push('/play');
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.chat.messages.length != prevProps.chat.messages.length) {
			this.scrollToBottom();
		}
	}

	handleChatSend = e => {
		e.preventDefault();
		const message = e.target.elements['game-board-chat-input'].value;

		this.props.sendMessageRoom({ text: message });
		e.target.reset();
	};

	scrollToBottom = () => {
		const { current: el } = this.chatBodyRef;
		el.scrollTop = el.scrollHeight;
	};

	handleCopyToClipboard = e => {
		this.joinLinkInputRef.current.select();
		document.execCommand('copy');
		e.target.focus();
	};

	render() {
		const { player, room, chat } = this.props;

		if (!room.created || room.createError != null) {
			return null;
		}

		return (
			<Page title="Play game - Drawthing" className="container-fluid page-start-game">
				<div className="game-start-container container">
					<div className="game-start-card rounded shadow">
						<div className="game-created-container">
							<h1 className="game-created-title">Successfully created room</h1>
							<RoomPlayers
								room={room}
								ref={this.joinLinkInputRef}
								handleCopyToClipboard={this.handleCopyToClipboard}
							/>
							<div className="game-created-chat-container">
								<RoomChat
									room={room}
									chat={chat}
									handleChatSend={this.handleChatSend}
									ref={this.chatBodyRef}
								/>
							</div>

							<div className="text-center">
								<Button icon="fa-rocket" className="mybtn2 my-auto">
									Start game
								</Button>
							</div>
						</div>
					</div>
					<PlayRules />
				</div>
			</Page>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room, chat: state.chat, socket: state.socket }),
	{ connectRoom, sendMessageRoom, push, subscribeToCreateRoom, subscribeToRoomChat }
)(Room);
