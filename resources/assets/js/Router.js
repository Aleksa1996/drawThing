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
import Play from './components/Pages/Play/Play';
import Room from './components/Pages/Room/Room';

import Page404 from './components/Pages/PageStatuses/Page404';

export const routes = [
	{
		id: v4(),
		path: '/',
		link: '/',
		component: Home,
		exact: true,
		mainNav: {
			show: true,
			text: 'Home'
		}
	},
	{
		id: v4(),
		path: '/about',
		link: '/about',
		component: About,
		exact: true,
		mainNav: {
			show: true,
			text: 'About'
		}
	},
	{
		id: v4(),
		path: '/contact',
		link: '/contact',
		component: Contact,
		exact: true,
		mainNav: {
			show: true,
			text: 'Contact'
		}
	},
	{
		id: v4(),
		path: '/game',
		link: '/game',
		component: Game,
		exact: true,
		mainNav: {
			show: false,
			text: ''
		}
	},
	{
		id: v4(),
		path: '/play/:roomUUID?',
		link: '/play',
		component: Play,
		exact: true,
		mainNav: {
			show: true,
			text: 'Play now!'
		}
	},
	{
		id: v4(),
		path: '/room',
		link: '/room',
		component: Room,
		exact: true,
		mainNav: {
			show: false,
			text: ''
		}
	}
];

const Router = props => {
	return (
		<Switch location={props.location}>
			{routes.map((r, id) => (
				<Route key={id} exact path={r.path} component={r.component} />
			))}
			<Route component={Page404} />
		</Switch>
	);
};
export default Router;
