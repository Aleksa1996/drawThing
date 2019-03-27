import Model from './Model';

export default class Game extends Model {
	inProgress = () => this.status == 'in_progress';
	starting = () => this.status == 'starting';
	notStarted = () => this.status == null;

	startingRound = () => this.status == 'STARTING_ROUND';
}
