const path = require('path');

const entryPath = path.join(process.cwd(), 'src');
const outputPath = path.join(process.cwd(), 'build');

module.exports = {
	entry: path.join(entryPath, 'app.tsx'),
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