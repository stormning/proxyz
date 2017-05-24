//这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const webpack = require('webpack');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    // 档案起始点从 entry 进入,可以是多个档案
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/index.js'
    ],
    //output 是放入产生出来的结果的相关参数
    //使打包后的错误信息精确到行
    devtool: 'inline-source-map',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js',
        // the output bundle
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules',],
            },
        ],
    },
    //devServer 则是webpack-dev-server设定
    devServer: {
        hot: true,
        //enable HMR on the server
        contentBase: resolve(__dirname, 'dist'),
        //match output path
        publicPath: '/'
        //match output `publicPath`
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
};