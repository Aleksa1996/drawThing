import Model from './Model';

export default class Game extends Model {
	isPlayerDrawing = player => this.drawn_by == player.id;

	chosedWordToArrayOfLetters = () => [...this.chosed_word.word];

	chosedWordExists = () => this.chosed_word && typeof this.chosed_word === 'object';

	started = () => this.status == 'STARTED';
	starting = () => this.status == 'STARTING';
	notStarted = () => this.status == 'NOT_STARTED';
	choosingWord = () => this.status == 'CHOOSING_WORD';
	startingRound = () => this.status == 'STARTING_ROUND';
}
