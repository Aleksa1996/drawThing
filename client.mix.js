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
	// output: {
	// 	chunkFilename: '[name].js'
	// },
	devtool: 'source-map'
	// plugins: [new HardSourceWebpackPlugin()]
});
mix
	.react('resources/assets/js/client.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css')
	.version()
	.extract();
