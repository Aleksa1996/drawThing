import React, { Component } from 'react';
import { v4 } from 'uuid';
import Page from '../Page';
import TechCard from './TechCard';

class About extends Component {
	state = {
		technologies: [
			{
				type: 'Backend',

				items: [
					{
						heading: `Laravel`,
						description: `Main component that connects other components, handles whole game (routing, authentication, restfull API...).
						I chose him because he is much simpler than the other frameworks, code is very intuitive and there is nothing that you can't do with him.`,
						img: `/img/laravel.png`,
						link: 'https://laravel.com/'
					},
					{
						heading: `Swoole`,
						description: `Provides HTTP and WebSocket Server. Responds to requests from outside with help of NGINX's reverse proxy.
						Powers up Laravel (giving him huge speed) by keeping his bootstrap in memory,
						giving PHP possibility to do tasks asynchronously.`,
						img: `/img/swoole.png`,
						link: 'https://www.swoole.co.uk/'
					},
					{
						heading: `Node.js`,
						description: `Primarily used for server side rendering. To render HTML from React.js app, so we can solve
						SEO problem by not providing blank page, also i used it alot in dev environment.`,
						img: `/img/nodejs.png`,
						link: 'https://nodejs.org/'
					}
				]
			},
			{
				type: 'Frontend',
				items: [
					{
						heading: `React.js`,
						description: `This project was imagined to be Single Page Application (SPA) and that wouldn't be possible without React.
						All HTML elements, all forms, the whole game ui that you see here is rendered by React`,
						img: `/img/react.png`,
						link: 'https://reactjs.org/'
					},
					{
						heading: `Redux.js`,
						description: `Used in combination with React. manages application state.
						Thanks to redux i have access to data in any React component without (passing props) pain
						the pattern that it provides is really awesome, it gives you ability to separate your code logic from view.`,
						img: `/img/redux.png`,
						link: 'https://redux.js.org/'
					}
				]
			},
			{
				type: 'Storage',
				items: [
					{
						heading: `MySQL`,
						description: `Relational Database Management System, really efficient way for manipulating important game data.`,
						img: `/img/mysql.png`,
						link: 'https://www.mysql.com/'
					},
					{
						heading: `Redis`,
						description: `Efficcient and fast in-memory key-value database with optional durability. Used to cache data for better application performances.`,
						img: `/img/redis.png`,
						link: 'https://redis.io/'
					}
				]
			}
		]
	};
	render() {
		return (
			<Page title="About - Drawthing" className="page-about">
				<div className="page-padding">
					<div className="impact">
						<div className="impact-inner">
							<h1 className="page-about-heading">About project</h1>
							<p className="page-about-description">
								The main concept and idea of this project is learning and discovering the ways in which new and modern web
								technologies work, the way that they cooperate with each other in order to breathe life into today's modern web
								applications. The main focus in this application is real-time communication between server and clients provided by
								WebSockets. In the process of creating this web application I have tried to explore all the possibilities and
								benefits that WebSockets offer. WebSockets are interesting and popular on the web today, also they are relatively
								new to me and that's the reasons why I chose this kind of project. Large number of guides that I've run into led
								me to Node.js, but I wanted to do it in PHP, and then I met Swoole (PHP framework). It supports WebSockets along
								with a bunch of other stuff. Been playing with it for three days, and all I can say is that it's really amazing. I
								want to point out that these technologies are not randomly selected. Each of them has its own purpose, and task to
								do (problem to solve). Below you can read more about what they do in this application.
							</p>
						</div>
					</div>
				</div>

				<div className="container page-about-tech">
					<h2 className="page-about-tech-heading">Technologies that made this project possible:</h2>

					{this.state.technologies.map(t => (
						<div className="page-about-tech-row" key={v4()}>
							<h3 className="page-about-tech-row-heading">{t.type}</h3>
							<div className="row">
								{t.items.map(i => (
									<div className="col-md-4" key={v4()}>
										<TechCard {...i} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</Page>
		);
	}
}

export default About;
