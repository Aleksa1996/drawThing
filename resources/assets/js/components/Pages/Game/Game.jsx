import React, { Component } from 'react';
import Page from '../Page';

import GameLayout from './GameLayout';
import GameToolBar from './GameToolBar/GameToolBar';

import GameScore from './GameScore/GameScore';
import GameCanvas from './GameCanvas/GameCanvas';
import GameChat from './GameChat/GameChat';

import GameTools from './GameCanvas/GameTools/GameTools';

import GameStart from './GameStart/GameStart';

class Game extends Component {
	state = {};
	render() {
		let isLogged = false;

		if (!isLogged) {
			return (
				<Page title="Play game - Drawthing" className="container-fluid page-start-game">
					<GameStart />
				</Page>
			);
		}

		return (
			<Page title="Play game - Drawthing" className="container-fluid page-game">
				<GameLayout>
					<GameToolBar />
					<div className="row">
						<GameScore />
						<GameCanvas />
						<GameChat />
					</div>
					<GameTools />
				</GameLayout>
			</Page>
		);
	}
}

export default Game;
