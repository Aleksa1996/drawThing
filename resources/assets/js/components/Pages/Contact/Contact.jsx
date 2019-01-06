import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../../actions/todoActions';

class Contact extends Component {
	state = {};

	componentDidMount() {
		this.props.fetchTodos();
	}

	render() {
		return <div>Contact</div>;
	}
}

// Contact.serverFetch = fetchTodos;

export default connect(
	state => ({ todos: state.todoReducer.todos }),
	{ fetchTodos }
)(Contact);
