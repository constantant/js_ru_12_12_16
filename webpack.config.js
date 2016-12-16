const path = require('path');

const {CheckerPlugin} = require('awesome-typescript-loader');

const entryPath = path.join(process.cwd(), 'src');
const outputPath = path.join(process.cwd(), 'build');

module.exports = {
    devtool: 'source-map',
    entry: {
    	app: path.join(entryPath, 'app.tsx')
    },
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
	resolve: {
		extensions: [ ".ts", ".tsx", ".js"]
	},
    module: {
	    rules: [
		    {
		    	test: /\.(tsx)?$/,
			    loader: "awesome-typescript-loader"
		    }
	    ],
	    plugins: [
		    new CheckerPlugin()
	    ],
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};