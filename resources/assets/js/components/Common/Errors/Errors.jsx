import React from 'react';
import ErrorsModel from '../../../utils/classes/Errors';
import ErrorItem from './ErrorItem';

const Errors = ({ errors }) => {
	if (!Array.isArray(errors)) errors = [errors];
	const errorsModel = new ErrorsModel(errors);
	return (
		<div className="error-list-container">
			{errorsModel.getGeneralErrors().map(e => (
				<ErrorItem key={e.message} className="text-center mb-3">
					{e.message}
				</ErrorItem>
			))}

			{errorsModel.getFormErrors().map(e => (
				<ErrorItem key={e.field} className="text-center mb-3">
					{e.field} {e.message}
				</ErrorItem>
			))}
		</div>
	);
};

export default Errors;
