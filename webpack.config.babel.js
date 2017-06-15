//这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {resolve} from 'path';
import webpack from 'webpack';
import {spawn, execSync} from 'child_process';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDev = process.env.NODE_ENV === "development" || process.env.DEBUG;

//path for dev server
const publicPath = isDev ? 'http://localhost:8080/' : './';

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: isDev
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
        publicPath: publicPath,
        // necessary for HMR to know where to load the hot update chunks
        filename: 'bundle.js'
        // the output bundle
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                // use: ['babel-loader',],
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [["es2015", {"modules": false}], "react", "stage-2"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?pages',],
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    //devServer 则是webpack-dev-server设定
    devServer: {
        hot: true,
        //enable HMR on the server
        // contentBase: resolve(__dirname, 'dist'),
        contentBase: './dist',
        //match output path
        publicPath: publicPath,
        //match output `publicPath`
        setup() {
            if (process.env.DESKTOP) {
                spawn(
                    'npm',
                    ['run', 'start-desktop'],
                    {shell: true, env: process.env, stdio: 'inherit'}
                )
                    .on('close', code => process.exit(code))
                    .on('error', spawnError => console.error(spawnError));
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'product'),
        }),
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        extractSass
        // sass
    ]/*,
     target: 'electron-renderer'*/
};