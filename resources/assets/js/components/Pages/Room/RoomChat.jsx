import React, { Component } from 'react';
import { v4 } from 'uuid';

import { split as _split, find as _find } from 'lodash';

const RoomChat = React.forwardRef(({ room, chat, handleChatSend }, chatBodyRef) => {
	return (
		<div className="game-board-container-right">
			<div className="game-board-chat rounded">
				<h2 className="game-created-title">Room Chat</h2>
				<div className="game-board-chat-body" ref={chatBodyRef}>
					{chat.messages.map(m => {
						const player = room.players.find(p => p.id == m.player_id);
						if (!player) return null;
						return (
							<div key={m.id} className="game-board-chat-message">
								<div className="d-flex justify-content-start align-items-baseline flex-row">
									<div className="game-board-chat-user mr-2 text-nowrap">
										<span className="text-nowrap">{player.username}:</span>
									</div>
									<div className="game-board-chat-text rounded">
										<p className="m-0">
											{_split(
												chat.emojis.reduce(
													(accumulator, currentValue) =>
														accumulator.replace(currentValue.text, ` ${currentValue.text} `),
													m.text
												),
												/\s+/g
											).map(word => {
												const found = _find(chat.emojis, v => v.text == word.trim());
												return found ? (
													<i key={v4()} className={`fa ${found.class} mx-2`} />
												) : (
													` ${word} `
												);
											})}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="game-board-chat-footer rounded-bottom">
					<form onSubmit={handleChatSend}>
						<input
							type="text"
							name="game-board-chat-input"
							className="form-control"
							id="game-board-chat-input"
							placeholder="Type word..."
						/>
					</form>
					<div className="game-board-chat-emojis">
						<div className="dropdown dropup">
							<a
								className="btn btn-secondary dropdown-toggle"
								href="javascript:void(0)"
								role="button"
								id="game-board-chat-emojis-dropdown"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fa fa-smile-o" aria-hidden="true" />
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<ul>
									{chat.emojis.map(emoji => (
										<li key={v4()} onClick={e => handleChatSend(e, emoji.text)}>
											<i className={`fa ${emoji.class}`} aria-hidden="true" />
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default RoomChat;
