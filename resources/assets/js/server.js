// Helper for disabling console log
const ___loggger___ = (function() {
	let oldConsoleLog = null;
	let pub = {};

	pub.enableLogger = function enableLogger() {
		if (oldConsoleLog == null) return;

		global['console']['log'] = oldConsoleLog;
	};

	pub.disableLogger = function disableLogger() {
		oldConsoleLog = console.log;
		global['console']['log'] = function() {};
	};

	return pub;
})();
// disabling console log while server side rendering
___loggger___.disableLogger();

/* globals:  [context, dispatch] */
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
	// enabling it again so we can output rendered html to PHP
	___loggger___.enableLogger();

	dispatch(htmlTemplate(reactDom, reduxState, helmetData));
});

function htmlTemplate(reactDom, reduxState, helmetData) {
	const js_bundles = context.js_bundle.map(b => `<script src="${b}"></script>`);
	return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="csrf-token" content="${context.csrf_token}">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <link rel="stylesheet" type="text/css" href="${context.css_bundle}" />
			${helmetData.link.toString()}
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        </head>

        <body>
            <div id="react-app">${reactDom}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${js_bundles.join('\n')}
        </body>
        </html>
    `;
}
