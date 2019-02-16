import React from 'react';
import GameCreatedChat from './GameCreatedChat';

const GameCreatedRoom = ({ player, room }) => {
	return (
		<div className="game-created-container">
			<h1 className="game-created-title">Successfully created room</h1>
			<div className="game-created-join-link">
				<div className="game-created-join-link-input">
					<input
						className="form-control"
						type="text"
						value="https://aleksajovanovic.com"
						disabled
					/>
					<small className="helper-text">Share this link to your friends to join you!</small>
				</div>
				<button className="mybtn2" title="Copy link">
					<i className="fa fa-files-o" aria-hidden="true" />
				</button>
			</div>
			<ul className="game-created-user-list">
				{room.players.map(p => (
					<li key={p} className="game-created-user-list-item">
						<span className="game-created-user-avatar shadow">
							{/* /img/avatar/agf146R43RvWhtz68ELjeKaM6uV4tbOv1dL8XlTZ.png */}
							<img src={p.avatar} alt={p.username} />
							<i
								className="fa fa-star game-creater-user-leader"
								aria-hidden="true"
								title="Room leader"
							/>
						</span>
						<span className="game-created-user-username">{p.username}</span>
						<span className="game-created-user-kick">
							<button className="mybtn2" title="Kick">
								<i className="fa fa-times" aria-hidden="true" />
							</button>
						</span>
					</li>
				))}
			</ul>
			<div className="game-created-chat-container">
				<GameCreatedChat />
			</div>
			<div className="text-center">
				<button className="mybtn2">
					<i className="fa fa-rocket mr-2" aria-hidden="true" />
					Start game
				</button>
			</div>
		</div>
	);
};

export default GameCreatedRoom;
