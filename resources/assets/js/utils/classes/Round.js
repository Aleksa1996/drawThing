import Model from './Model';

export default class Round extends Model {
	isPlayerDrawing = player => this.drawn_by && this.drawn_by == player.id;
	isPlayerChoosingWord = () => this.localStatus == 'PLAYER_CHOOSING_WORD';
	isPlayerChoosedWord = () => this.localStatus == 'PLAYER_CHOOSED_WORD';

	chosedWordToArrayOfLetters = () => [...this.chosed_word.word];
	chosedWordExists = () => this.chosed_word && typeof this.chosed_word === 'object';

	starting = () => this.localStatus == 'ROUND_STARTING';
	inProgress = () => this.localStatus == 'ROUND_IN_PROGRESS';
	finished = () => this.localStatus == 'ROUND_FINISHED';

	getFormattedTimer = () => this.timer;
	// 15 secs
	nearEnd = () => this.inProgress() && !this.finished() && this.seconds <= 5;

	playerGuessedWord = player => {
		let playerScore = this.score.find(s => s.player_id == player.id);
		if (playerScore) {
			return playerScore.guessed;
		}
		return false;
	};

	getDrawer = players => {
		return players.find(this.isPlayerDrawing);
	};
}
