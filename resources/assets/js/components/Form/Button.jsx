import React from 'react';
import Spinner from '../Common/Spinner/Spinner';
const Button = ({ children, icon, disabled, ...props }) => (
	<button {...props} disabled={disabled}>
		{icon && (
			<i
				className={`fa ${disabled ? 'fa-hourglass-half spinner-icon' : icon} mr-2`}
				aria-hidden="true"
			/>
		)}
		{children}
	</button>
);
export default Button;
