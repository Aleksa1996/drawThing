import { get as _get } from 'lodash';

class Errors {
	constructor(errors) {
		this.errors = errors;
	}

	static init = errors => new Errors(errors);
	static initFromRequest = error => new Errors(_get(error, 'response.data.errors', []));

	exists = field => this.get(field) !== undefined;

	get = field => this.errors.find(e => e.field == field);

	getMessage = field => this.exists(field) && this.get(field).message;

	isGeneralError = field => this.exists(field) && this.get(field).field.length == 0;

	isFormError = field => !this.isGeneralError(field);

	getGeneralErrors = () => this.errors.filter(e => this.isGeneralError(e));

	getFormErrors = () => this.errors.filter(e => this.isFormError(e));

	remove = field => this.errors.filter(e => e.field != field);

	formatForReduxForm = () => {
		const fErrors = {};
		this.errors.forEach(e => {
			e.field.length == 0 ? (fErrors['_error'] = e.message) : (fErrors[e.field] = e.message);
		});

		return fErrors;
	};
}

export default Errors;
