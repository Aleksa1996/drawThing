import React from 'react';

const ErrorItem = ({ className, children }) => {
	return (
		<div className={`error-list-item ${className}`}>
			<i className="fa fa-exclamation-circle" aria-hidden="true" /> &nbsp; {children}
		</div>
	);
};

export default ErrorItem;
