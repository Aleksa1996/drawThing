let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// THIS FILE IS NOT LONGER USED!
if (process.env.TARGET == 'web') {
	mix.webpackConfig({
		output: {
			chunkFilename: 'js/[name].js'
		},
		devtool: 'source-map'
	});
	mix
		.react('resources/assets/js/client.js', 'public/js')
		.sass('resources/assets/sass/app.scss', 'public/css')
		.version();
} else {
	mix.webpackConfig({
		target: 'node'
	});
	mix.react('resources/assets/js/server.js', 'public/js');
	mix.disableNotifications();
}
