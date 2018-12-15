import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../../actions/blogActions';

import BlogItem from './BlogItem';

class Blog extends Component {
	state = {};

	componentDidMount() {
		if (this.props.blogs.length == 0) {
			this.props.fetchBlogs();
		}

		// this.props.fetchBlogs();
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				{this.props.blogs.map(b => (
					<BlogItem key={b.id} {...b} />
				))}
			</div>
		);
	}
}

Blog.serverFetch = fetchBlogs;

export default connect(
	state => ({ blogs: state.blogReducer.blogs }),
	{ fetchBlogs }
)(Blog);
