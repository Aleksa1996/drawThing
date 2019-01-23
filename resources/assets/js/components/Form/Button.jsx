import React from 'react';

const Button = ({ children, icon, ...props }) => (
	<button {...props}>
		{icon && <i className={`fa ${icon} mr-2`} aria-hidden="true" />}
		{children}
	</button>
);
export default Button;
