import Model from './Model';

import { get as _get } from 'lodash';

export default class Room extends Model {
	isCreated = () => {
		return this.created && this.createError == null;
	};

	isJoined = () => {
		return this.joined && this.joinError == null;
	};

	isReady = () => this.isCreated() || this.isJoined();

	isPlayerAdmin = player => this.administered_by == player.id;

	getPlayer = id => this.players.find(p => p.id == id);

	isPlayerActive = id => {
		const player = this.getPlayer(id);
		return player && _get(player, 'active', true);
	};

	getActivePlayers = () => {
		return this.players.filter(p => _get(p, 'active', true));
	};
}
