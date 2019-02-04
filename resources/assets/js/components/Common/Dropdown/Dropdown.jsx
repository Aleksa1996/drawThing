import React from 'react';
import { Link } from 'react-router-dom';

import { v4 } from 'uuid';

const Dropdown = ({ children, actions, id, className, classNameMenu, classNameContainer }) => {
	return (
		<div className={`dropdown ${classNameContainer || ''}`}>
			<a
				className={`btn btn-secondary dropdown-toggle ${className || ''}`}
				href="javascript:void(0)"
				role="button"
				id={id}
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{children}
			</a>

			<div className={`dropdown-menu ${classNameMenu || ''}`} aria-labelledby={id}>
				{actions.map(a => (
					<Link className="dropdown-item" to={a.to} key={v4()}>
						{a.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
