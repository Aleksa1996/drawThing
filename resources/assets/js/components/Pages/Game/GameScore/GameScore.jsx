import React, { Component } from 'react';

class GameScore extends Component {
	state = {
		users: [1, 2, 3, 4, 5, 6]
	};
	render() {
		return (
			<div className="col-md-3">
				<div className="game-board-container-left">
					<div className="game-board-score shadow rounded">
						<ul className="game-board-score-list">
							{this.state.users.map(u => (
								<li key={u} className="game-board-score-row rounded">
									<span className="game-board-score-avatar-container">
										<span className="game-board-score-drawing">
											{u == 4 && <i className="fa fa-paint-brush" aria-hidden="true" />}
										</span>

										<span className="game-board-score-avatar">
											Avatar
											<span className="game-board-score-position">{u}</span>
										</span>
									</span>
									<span className="game-board-score-username">Username</span>
									<span className="game-board-score-points">Points</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default GameScore;
