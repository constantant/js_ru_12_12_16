const path = require('path');

const {CheckerPlugin} = require('awesome-typescript-loader');

const entryPath = path.join(process.cwd(), 'src');
const outputPath = path.join(process.cwd(), 'build');

module.exports = {
	entry: './src/app.tsx',
	output: {
		path: outputPath,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
};