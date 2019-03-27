import Model from './Model';

export default class Round extends Model {
	isPlayerDrawing = player => this.drawn_by && this.drawn_by == player.id;
	isPlayerChoosingWord = () => this.localStatus == 'PLAYER_CHOOSING_WORD';

	chosedWordToArrayOfLetters = () => [...this.chosed_word.word];
	chosedWordExists = () => this.chosed_word && typeof this.chosed_word === 'object';

	getFormattedTimer = () => this.timer;
	nearEnd = () => this.started && !this.finished && this.diffInSeconds <= 15;
}
