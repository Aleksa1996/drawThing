import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	sendMessageRoom,
	kickPlayer,
	subscribeToChatGlobalEvents,
	subscribeToRoomGlobalEvents,
	clearDataAfterKick
} from '../../../actions';
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
		const {
			room,
			push,
			socket,
			subscribeToChatGlobalEvents,
			subscribeToRoomGlobalEvents
		} = this.props;

		const roomModel = new RoomModel(room);
		try {
			if (!socket.connected) throw new Error('Socket not connected');

			if (roomModel.isReady() && !this.subscribedToRoomChat) {
				subscribeToChatGlobalEvents();
				subscribeToRoomGlobalEvents();
				this.subscribedToRoomChat = true;
			}
		} catch (e) {
			console.log(e);
			push('/play');
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.room.lastKickedPlayer.id == this.props.player.id) {
			this.props.clearDataAfterKick();
			this.props.push('/play');
			return;
		}
		if (
			this.props.chat.messages.length != prevProps.chat.messages.length &&
			this.props.chat.messages.length > 0
		) {
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

		if (
			typeof el !== 'undefined' &&
			typeof el.scrollTop !== 'undefined' &&
			typeof el.scrollHeight !== 'undefined'
		) {
			el.scrollTop = el.scrollHeight;
		}
	};

	handleCopyToClipboard = e => {
		this.joinLinkInputRef.current.select();
		document.execCommand('copy');
		e.target.focus();
	};

	handleKick = player_id => {
		this.props.kickPlayer({ player_to_kick: player_id });
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
								handleKick={this.handleKick}
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
	{
		sendMessageRoom,
		push,
		subscribeToChatGlobalEvents,
		kickPlayer,
		subscribeToRoomGlobalEvents,
		clearDataAfterKick
	}
)(Room);
