import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';

class App extends Component {
	state = {};
	render() {
		return <Layout {...this.props} />;
	}
}

export default withRouter(App);
