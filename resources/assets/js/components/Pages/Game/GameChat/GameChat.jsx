import React, { Component } from 'react';
import { v4 } from 'uuid';
import RoomChatMessage from '../../Room/RoomChatMessage';
import { split as _split, find as _find, get as _get } from 'lodash';

const GameChat = React.forwardRef(({ player, room, chat, game, handleChatSend }, chatBodyRef) => {
	return (
		<div className="col-md-3 order-2 order-md-3 my-md-0 my-3">
			<div className="game-board-container-right">
				<div className="game-board-chat shadow rounded">
					<div className="game-board-chat-header rounded">
						<i className="fa fa-comment" aria-hidden="true" />
						<span>Chat</span>
					</div>
					<div className="game-board-chat-body" ref={chatBodyRef}>
						{chat.messages.map(m => {
							const player = room.getPlayer(m.player_id);
							if (!player && m.player_id != '#playerActionMessage') return null;
							return (
								<RoomChatMessage
									key={m.id}
									chat={chat}
									message={m.text}
									username={_get(player, 'username', '')}
								/>
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
								disabled={game.isPlayerDrawing(player)}
								autoComplete="off"
							/>
						</form>

						<div className="game-board-chat-emojis">
							<div className="dropdown dropup">
								<a
									className={`btn btn-secondary dropdown-toggle ${
										game.isPlayerDrawing(player) ? 'disabled' : ''
									}`}
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
		</div>
	);
});
export default GameChat;
