let mix = require('laravel-mix');
let HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
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

mix.webpackConfig({
	target: 'node'
	// plugins: [new HardSourceWebpackPlugin()]
});
mix
	.react('resources/assets/js/server.js', 'public/js/server')
	.setPublicPath('public/js/server')
	.disableNotifications();
