let mix = require('laravel-mix');
let webpack = require('webpack');
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
	// target: 'node', // enum
	// node: { process: false },
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	// 	})
	// ]
});

mix
	.react('resources/assets/js/client.js', 'public/js')
	.react('resources/assets/js/server.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css');
