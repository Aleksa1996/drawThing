import Model from './Model';

export default class Room extends Model {
	isCreated = () => {
		return this.created && this.createError == null;
	};

	isJoined = () => {
		return this.joined && this.joinError == null;
	};

	isReady = () => this.isCreated() || this.isJoined();
}
