import { generateFormFields } from '../../../utils';

export const formFields = generateFormFields({
	name: {
		type: 'text',
		label: {
			text: 'Your name',
			active: false,
			options: {}
		},
		placeholder: {
			active: false,
			text: ''
		},
		validation: {
			required: true,
			minLength: 2
		},
		errMessage: 'Name must be min 2 characters!'
	},
	email: {
		type: 'email',
		label: {
			text: 'Your email'
		},
		placeholder: {
			text: 'hello'
		},
		validation: {
			required: true,
			email: true
		},
		errMessage: 'Email must be valid!'
	},
	subject: {
		type: 'subject',
		label: 'Your subject',
		validation: {
			required: true,
			minLength: 2
		},
		errMessage: 'subject must be min 2 characters!'
	},
	message: {
		type: 'textarea',
		label: 'Message',
		options: {
			rows: '6'
		},
		validation: {
			required: true,
			minLength: 5
		},
		errMessage: 'Message must be min 5 characters!'
	}
});
