import React from 'react';
import { v4 } from 'uuid';

const RoomChatMessage = ({ chat, message, username }) => {
	return (
		<div className="game-board-chat-message">
			<div className="d-flex justify-content-start align-items-baseline flex-row">
				{username && username.length > 1 && (
					<div className="game-board-chat-user mr-2 text-nowrap">
						<span className="text-nowrap">{username}:</span>
					</div>
				)}
				<div className="game-board-chat-text rounded">
					<p className={`m-0 ${chat.getTypeClassname(message)}`}>
						{chat.parseEmojis(message.text, (emoji, word) =>
							emoji ? <i key={v4()} className={`fa ${emoji.class} mx-1`} /> : ` ${word} `
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RoomChatMessage;
