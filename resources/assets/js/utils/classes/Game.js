import Model from './Model';

import { orderBy as _orderBy } from 'lodash';

export default class Game extends Model {
	inProgress = () => this.status == 'in_progress';
	starting = () => this.status == 'starting';
	notStarted = () => this.status == null;
	finished = () => this.status == 'finished';

	isCanvasEmpty = () => this.drawing.items.length <= 0;

	getScoreForPlayer = player => {
		return this.rounds.reduce((totalScore, round) => {
			let score = 0;
			let playerScore = round.score.find(s => s.player_id == player.id);

			if (playerScore) {
				score = playerScore.points;
			}

			return totalScore + score;
		}, 0);
	};

	getFinalScoreForPlayer = player => {
		return this.finalScores.reduce((totalScore, round) => {
			let score = 0;
			let playerScore = round.score.find(s => s.player_id == player.id);

			if (playerScore) {
				score = playerScore.points;
			}

			return totalScore + score;
		}, 0);
	};

	sortPlayersByScore = players => _orderBy(players, ['score'], ['desc']);
}
