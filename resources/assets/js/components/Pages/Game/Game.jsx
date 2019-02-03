import React, { Component } from 'react';
import Page from '../Page';

import GameToolBar from './GameToolBar/GameToolBar';
import GameLayout from './GameLayout';
import GameScore from './GameScore/GameScore';
import GameCanvas from './GameCanvas/GameCanvas';
import GameChat from './GameChat/GameChat';

class Game extends Component {
	state = {};
	render() {
		return (
			<Page title="Play game - Drawthing" className="container-fluid page-game">
				<GameLayout>
					<GameToolBar />
					<GameScore />
					<GameCanvas />
					<GameChat />
				</GameLayout>
			</Page>
		);
	}
}

export default Game;
