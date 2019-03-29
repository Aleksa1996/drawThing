import Model from './Model';

import { get as _get } from 'lodash';

export default class Room extends Model {
	isCreated = () => this.created && this.createError == null;

	isJoined = () => this.joined && this.joinError == null;

	isReady = () => this.isCreated() || this.isJoined();

	isPlayerAdmin = player => this.administered_by == player.id;

	getPlayer = id => this.players.find(p => p.id == id);

	isPlayerActive = id => {
		const player = this.getPlayer(id);
		return player && _get(player, 'active', true);
	};

	getActivePlayers = () => this.players.filter(p => _get(p, 'active', true));

	isEmpty = () => this.players.length <= 0;

	getPlayerCount = () => this.players.length;

	getActivePlayerCount = () => this.getActivePlayers().length;

	isPlayerKicked = player => this.lastKickedPlayer.id == player.id;
}
