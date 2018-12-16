/* global context, dispatch */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { routes } from './Router';
import App from './App';
import { store } from './store/store';

const routerContext = {};

const dataRequirements = routes
	.filter(route => matchPath(context.url, route)) // filter matching paths
	.map(route => route.component) // map to components
	.filter(comp => comp.serverFetch) // check if components have data requirement
	.map(comp => store.dispatch(comp.serverFetch()));

Promise.all(dataRequirements).then(() => {
	//dataRequirements will be used somewhere to pass allong state
	const jsx = (
		<Provider store={store}>
			<StaticRouter context={routerContext} location={context.url}>
				<App />
			</StaticRouter>
		</Provider>
	);
	const reactDom = renderToString(jsx);
	const reduxState = store.getState();
	const helmetData = Helmet.renderStatic();

	dispatch(htmlTemplate(reactDom, reduxState, helmetData));
});

function htmlTemplate(reactDom, reduxState, helmetData) {
	return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="csrf-token" content="${context.csrf_token}">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <link rel="stylesheet" type="text/css" href="${context.css_bundle}" />
            ${helmetData.link.toString()}
        </head>

        <body>
            <div id="react-app">${reactDom}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            <script src="${context.js_bundle}"></script>
        </body>
        </html>
    `;
}
