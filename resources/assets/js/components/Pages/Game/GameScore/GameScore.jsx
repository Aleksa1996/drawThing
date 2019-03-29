import React from 'react';

const GameScore = ({ room, player }) => {
	return (
		<div className="col-md-3 order-3 order-md-1 my-md-0 my-3">
			<div className="game-board-container-left">
				<div className="game-board-score shadow rounded">
					<div className="game-board-score-header rounded">
						<i className="fa fa-trophy" aria-hidden="true" />
						<span>Scoreboard</span>
					</div>
					<ul className="game-board-score-list">
						{room.getActivePlayers().map(p => (
							<li key={p.id} className="game-board-score-row rounded">
								<span className="game-board-score-avatar-container">
									<span className="game-board-score-drawing">
										{/* {u == 4 && <i className="fa fa-paint-brush" aria-hidden="true" />} */}
									</span>

									<span className="game-board-score-avatar">
										<img src={p.avatar} className="shadow" />
										<span className="game-board-score-position">{p.id}</span>
									</span>
								</span>
								<span className="game-board-score-username">
									{p.username} {player.id == p.id ? <small> (you)</small> : null}
									<small className="game-board-score-points">(22) point/s</small>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GameScore;
