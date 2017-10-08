const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './App/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/js/'
    },
    resolve: {
        modules: [path.resolve(__dirname), path.resolve('node_modules')],
        alias: {
            src: 'src'
        },
        extensions: ['*', '.jsx', '.js', '.css']
    },
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: path.join(__dirname, 'static'),
        proxy: {
            '/api': {
                target: 'http://localhost:9001',
                pathRewrite: {'^/api' : ''}
            }
        },
        historyApiFallback: true
    },
    module: {
        rules:[{
            use : 'babel-loader',
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.less$/i,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader"
                },
                {
                    loader: "less-loader"
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
};
