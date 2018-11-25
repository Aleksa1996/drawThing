import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import asyncComponent from './hocs/asyncComponent';

// const HomeAsync = asyncComponent(() => import('./components/Pages/Home/Home'));
// const AboutAsync = asyncComponent(() => import('./components/Pages/About/About'));

// export const routes = [
// 	{
// 		id: '123',
// 		path: '/',
// 		component: HomeAsync,
// 		exact: true
// 	},
// 	{
// 		id: '124',
// 		path: '/about',
// 		component: AboutAsync,
// 		exact: true
// 	}
// ];

import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';

export const routes = [
	{
		id: '123',
		path: '/',
		component: Home,
		exact: true
	},
	{
		id: '124',
		path: '/about',
		component: About,
		exact: true
	},
	{
		id: '125',
		path: '/blog',
		component: Blog,
		exact: true
	}
];

const Router = props => {
	return (
		<Switch>
			{routes.map((r, id) => (
				<Route key={id} exact path={r.path} component={r.component} />
			))}
		</Switch>
	);
};
export default Router;
