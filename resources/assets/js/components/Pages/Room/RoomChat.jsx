import React, { Component } from 'react';

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
										<p className="m-0">{m.text}</p>
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
									<li>
										<i className="fa fa-smile-o" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-meh-o" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-frown-o" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-hand-peace-o" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-thumbs-o-up" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-thumbs-o-down" aria-hidden="true" />
									</li>
									<li>
										<i className="fa fa-heart-o" aria-hidden="true" />
									</li>
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
