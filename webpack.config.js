/**
 * Created by vipulsodha on 07/07/18.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontApp/src/index.js',
    output: {
        path: path.join(__dirname, '/app/public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/app/public')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './frontApp/src/index.html'
    })]
};