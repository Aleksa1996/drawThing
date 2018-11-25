import React from 'react';

const BlogItem = ({ heading, body, img, created_at }) => {
	return (
		<div className="card">
			<img className="card-img-top" src={img} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{heading}</h5>
				<p className="card-text">{body}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default BlogItem;
