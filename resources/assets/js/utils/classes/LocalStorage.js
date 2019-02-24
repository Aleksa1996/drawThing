// import { merge as _merge, get as _get, cloneDeep as _cloneDeep } from 'lodash';
import { assign as fp_assign } from 'lodash/fp';
export default class LocalStorage {
	constructor() {}
	static isBrowser =
		typeof window !== 'undefined' && window.document && window.document.createElement;

	static save(key, value) {
		return LocalStorage.isBrowser ? localStorage.setItem(key, JSON.stringify(value)) : false;
	}

	static get(key, defaultValue = null) {
		if (!LocalStorage.isBrowser) return defaultValue;

		let value = defaultValue;
		try {
			value = JSON.parse(localStorage.getItem(key));
		} catch (e) {}

		return value;
	}
}
