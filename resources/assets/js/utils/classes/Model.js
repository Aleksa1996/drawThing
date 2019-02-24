import { forEach as _forEach, cloneDeep as _cloneDeep } from 'lodash';

export default class Model {
	constructor(data) {
		_forEach(data, (value, key) => {
			this[key] = _cloneDeep(value);
		});
	}
}
