import React from 'react';

const InfoTooltip = ({ children, placement, info, className }) => (
	<button
		type="button"
		className={`btn info-tooltip ${className || ''}`}
		data-toggle="tooltip"
		data-html="true"
		data-placement={placement || 'top'}
		title={info}
	>
		{children}
	</button>
);

export default InfoTooltip;
