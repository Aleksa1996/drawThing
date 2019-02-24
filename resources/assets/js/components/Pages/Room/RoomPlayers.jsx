import React from 'react';

import globals from '../../../globals';

const RoomPlayers = React.forwardRef(({ room, handleCopyToClipboard }, joinLinkInputRef) => {
	return (
		<React.Fragment>
			<div className="game-created-join-link">
				<div className="game-created-join-link-input">
					<input
						className="form-control"
						type="text"
						value={globals.url.host + '/play/' + room.uuid}
						ref={joinLinkInputRef}
						readOnly
					/>
					<small className="helper-text">Share this link to your friends to join you!</small>
				</div>
				<button onClick={handleCopyToClipboard} type="button" className="mybtn2" title="Copy link">
					<i className="fa fa-files-o" aria-hidden="true" />
				</button>
			</div>
			<ul className="game-created-user-list">
				{room.players.map(p => (
					<li key={p.id} className="game-created-user-list-item">
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
		</React.Fragment>
	);
});

export default RoomPlayers;
