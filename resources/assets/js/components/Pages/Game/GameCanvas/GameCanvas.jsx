import React, { Component } from 'react';

class GameCanvas extends Component {
	state = {};
	render() {
		return (
			<div className="col-md-6">
				<div className="game-board-container-center">
					<div className="game-board-sketchpad">Canvas</div>
				</div>
			</div>
		);
	}
}

export default GameCanvas;
