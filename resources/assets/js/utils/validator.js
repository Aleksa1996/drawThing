import validator from 'validator';

export const checkValidity = (value, rules) => {
	let isValid = true;

	if (!rules) {
		return true;
	}

	if (rules.required) {
		switch (typeof value) {
			case 'string': {
				isValid = value.trim() !== '' && isValid;
				break;
			}
			case 'boolean': {
				isValid = value && isValid;
				break;
			}
			case 'object': {
				isValid = value && isValid;
				break;
			}
		}
	}

	if (rules.requiredSelect) {
		isValid = value.trim() !== '' && value.trim() !== '0' && isValid;
	}

	if (rules.minLength) {
		isValid = value.length >= rules.minLength && isValid;
	}

	if (rules.email) {
		isValid = validator.isEmail(value) && isValid;
	}

	return isValid;
};

export const validate = formFields => (values, props) => {
	const errors = {};
	const formFieldsMap = new Map(Object.entries(formFields));

	for (let [name, { validation, errMessage }] of formFieldsMap) {
		if (!checkValidity(_.get(values, name, ''), validation)) errors[name] = errMessage;
	}
	return errors;
};
