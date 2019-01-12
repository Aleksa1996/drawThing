import { generateFormFields } from '../../../utils';

export const formFields = generateFormFields({
	name: {
		type: 'text',
		label: {
			text: 'Name',
			active: true,
			options: {}
		},
		validation: {
			required: true,
			minLength: 2
		},
		materialDesign: true,
		errMessage: 'Name must be min 2 characters!'
	},
	email: {
		type: 'email',
		label: {
			text: 'Email'
		},
		validation: {
			required: true,
			email: true
		},
		materialDesign: true,
		errMessage: 'Email must be valid!'
	},
	subject: {
		type: 'text',
		label: {
			text: 'Subject'
		},
		validation: {
			required: true,
			minLength: 2
		},
		materialDesign: true,
		errMessage: 'subject must be min 2 characters!'
	},
	message: {
		type: 'textarea',
		label: {
			text: 'Message'
		},
		options: {
			rows: '6'
		},
		validation: {
			required: true,
			minLength: 5
		},
		materialDesign: true,
		errMessage: 'Message must be min 5 characters!'
	}
});
