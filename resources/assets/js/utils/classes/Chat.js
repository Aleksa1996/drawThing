import Model from './Model';

import { split as _split, find as _find, get as _get, has as _has } from 'lodash';

export default class Chat extends Model {
	parseEmojis = (message, callback) => {
		return this.splitWordsFromMessage(message).map(word => {
			const emoji = _find(this.emojis, e => e.text == word.trim());
			return callback(emoji, word);
		});
	};

	splitWordsFromMessage = message =>
		_split(
			this.emojis.reduce(
				(accumulator, currentValue) =>
					accumulator.replace(currentValue.text, ` ${currentValue.text} `),
				message
			),
			/\s+/g
		);

	hasMessages = () => this.messages.length > 0;

	getTypeClassname = message => _get(message, 'type.className', '');

	isMessageByPlayer = message => _has(message, 'player_id');
}
