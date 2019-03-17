class Errors {
	constructor(errors) {
		this.errors = errors;
	}

	exists = field => this.get(field) !== undefined;

	get = field => this.errors.find(e => e.field == field);

	getMessage = field => this.exists(field) && this.get(field).message;

	isGeneralError = field => this.exists(field) && this.get(field).field.length == 0;

	isFormError = field => !this.isGeneralError(field);

	getGeneralErrors = () => this.errors.filter(e => this.isGeneralError(e));

	getFormErrors = () => this.errors.filter(e => this.isFormError(e));
}
