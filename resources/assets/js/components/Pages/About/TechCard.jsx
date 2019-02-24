import React from 'react';

const TechCard = ({ heading, description, img, link }) => (
	<a className="page-about-tech-card-wrapper-link" target="_blank" href={link}>
		<div className="page-about-tech-card rounded">
			<h4 className="page-about-tech-card-heading">{heading}</h4>
			<p className="page-about-tech-card-description">{description}</p>
			<img src={img} className="img-fluid page-about-tech-card-image" />
		</div>
	</a>
);

export default TechCard;
