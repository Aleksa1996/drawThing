const path = require('path');

//Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		client: './resources/assets/js/client' // string | object | array
	},
	// Here the application starts executing
	// and webpack starts bundling

	output: {
		// options related to how webpack emits results

		path: path.resolve(__dirname, 'public/js') // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)

		// filename: 'js/bundle.js', // string
		// the filename template for entry chunks
		// chunkFilename: 'js/[name].bundle.js',
	},

	module: {
		// configuration regarding modules

		rules: [
			// rules for modules (configure loaders, parser options, etc.)
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				resolve: { extensions: ['.js', '.jsx'] }
			},

			{
				test: /\.scss/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	// Dev server options
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000,
		historyApiFallback: true
	},
	performance: {
		hints: isProduction ? 'warning' : false
	},

	devtool: 'source-map', // enum
	// enhance debugging by adding meta info for the browser devtools
	// source-map most detailed at the expense of build speed.

	target: 'web', // enum
	// the environment in which the bundle should run
	// changes chunk loading behavior and available modules

	stats: 'errors-only',
	// lets you precisely control what bundle information gets displayed

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/app.css',
			chunkFilename: 'css/[id].css'
		}),
		new WebpackNotifierPlugin({ alwaysNotify: true }),
		new FriendlyErrorsWebpackPlugin()
	]
};
