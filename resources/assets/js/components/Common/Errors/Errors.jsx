import React from 'react';

const Errors = ({ errors }) => {
	if (!Array.isArray(errors)) errors = [errors];
	return (
		<div className="error-list-container">
			{errors.map(e => (
				<div class="error-list-item">
					<i class="fa fa-exclamation-circle" aria-hidden="true" /> &nbsp; {e}
				</div>
			))}
		</div>
	);
};

export default Errors;
