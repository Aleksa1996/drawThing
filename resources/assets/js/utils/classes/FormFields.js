import { merge as _merge, get as _get, cloneDeep as _cloneDeep } from 'lodash';

class FormFields {
	constructor(f) {
		this.originalFields = f;
		this.fields = this.mergeWithDefaults(f);
	}

	getFields() {
		return this.fields;
	}

	field = name => {
		return _get(this.fields, name, null);
	};

	mergeWithDefaults = fields => {
		let mergedFields = {};
		Object.entries(fields).forEach(([name, field]) => {
			mergedFields[name] = _merge(_cloneDeep(defaults), field);
		});
		return mergedFields;
	};
}
export const generateFormFields = fields => new FormFields(fields).getFields();

const defaults = {
	type: 'text',
	label: {
		text: '',
		active: true,
		options: {
			class: ''
		}
	},
	placeholder: {
		text: '',
		active: false
	},
	validation: {
		required: true
	},
	errMessage: 'required!'
};
