import React from 'react';
import GameTools from './GameCanvas/GameTools/GameTools';

const GameLayout = ({ children }) => {
	return (
		<div className="game-board-container">
			<div className="row">{children}</div>

			<GameTools />
		</div>
	);
};

export default GameLayout;
