import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './hocs/asyncComponent';
import { v4 } from 'uuid';

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
import Contact from './components/Pages/Contact/Contact';
import Game from './components/Pages/Game/Game';

export const routes = [
	{
		id: v4(),
		path: '/',
		component: Home,
		exact: true
	},
	{
		id: v4(),
		path: '/about',
		component: About,
		exact: true
	},
	{
		id: v4(),
		path: '/contact',
		component: Contact,
		exact: true
	},
	{
		id: v4(),
		path: '/game',
		component: Game,
		exact: true
	}
];

const Router = props => {
	return (
		<Switch location={props.location}>
			{routes.map((r, id) => (
				<Route key={id} exact path={r.path} component={r.component} />
			))}
		</Switch>
	);
};
export default Router;
