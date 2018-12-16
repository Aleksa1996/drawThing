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
