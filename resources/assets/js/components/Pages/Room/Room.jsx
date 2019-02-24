import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectRoom, sendMessageRoom, subscribeToRoomChat } from '../../../actions';
import { push } from 'connected-react-router';

import RoomModel from '../../../utils/classes/Room';

import Page from '../Page';
import PlayRules from '../Play/PlayRules';

import RoomChat from './RoomChat';
import RoomPlayers from './RoomPlayers';

import Button from '../../Form/Button';

class Room extends Component {
	constructor(props) {
		super(props);
		this.chatBodyRef = React.createRef();
		this.joinLinkInputRef = React.createRef();
		this.subscribedToRoomChat = false;
	}

	componentDidMount() {
		const { room, push, socket, subscribeToRoomChat } = this.props;

		const roomModel = new RoomModel(room);
		try {
			if (!socket.connected) throw new Exception('Socket not connected');

			if (roomModel.isReady() && !this.subscribedToRoomChat) {
				subscribeToRoomChat();
				this.subscribedToRoomChat = true;
			}
		} catch (e) {
			push('/play');
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.chat.messages.length != prevProps.chat.messages.length) {
			this.scrollToBottom();
		}
	}

	handleChatSend = (e, additionalData = null) => {
		e.preventDefault();
		let message = '';
		// Message comes from text input
		if (e.type == 'submit') {
			message = e.target.elements['game-board-chat-input'].value;
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
		el.scrollTop = el.scrollHeight;
	};

	handleCopyToClipboard = e => {
		this.joinLinkInputRef.current.select();
		document.execCommand('copy');
		e.target.focus();
	};

	render() {
		const { player, room, chat } = this.props;
		const roomModel = new RoomModel(room);
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
								handleCopyToClipboard={this.handleCopyToClipboard}
								ref={this.joinLinkInputRef}
							/>
							<div className="game-created-chat-container">
								<RoomChat
									room={roomModel}
									chat={chat}
									handleChatSend={this.handleChatSend}
									ref={this.chatBodyRef}
								/>
							</div>

							{isPlayerAdmin && (
								<div className="text-center">
									<Button icon="fa-rocket" className="mybtn2 my-auto">
										Start game
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
	state => ({ player: state.player, room: state.room, chat: state.chat, socket: state.socket }),
	{ connectRoom, sendMessageRoom, push, subscribeToRoomChat }
)(Room);
