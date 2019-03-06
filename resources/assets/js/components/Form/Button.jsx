import React from 'react';
import Spinner from '../Common/Spinner/Spinner';
const Button = ({ children, icon, disabled, ...props }) => (
	<button {...props} disabled={disabled}>
		{icon && <i className={`fa ${icon} mr-2`} aria-hidden="true" />}
		{children}
		{disabled && <Spinner />}
	</button>
);
export default Button;
