var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var APP_PATH = path.resolve(__dirname, 'app');
var SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    cache: true,
    target: 'electron',
	
    devtool: 'source-map',
    entry: {
        index: './src/ui/index'
    },
    output: {
        path: APP_PATH,
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    SRC_PATH,
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.js|\.jsx?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015', 'react'],
                    plugins:[
                        ['import', {libraryName: 'antd', style: 'css'}] //按需加载
                    ],
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.EnvironmentPlugin(["NODE_ENV"]),
        new CopyWebpackPlugin([
		    { from: path.resolve(SRC_PATH, 'main.js'), to: 'main.js' },
			{ from: path.resolve(SRC_PATH, 'backend'), to: 'backend' },
            { from: path.resolve(SRC_PATH, 'ui/index.html'), to: 'index.html' },
            { from: path.resolve(SRC_PATH, 'package.json'), to: 'package.json' }
        ])
    ]
};
