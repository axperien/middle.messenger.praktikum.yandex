/**
 * Webpack main configuration file
 */

const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = require('./configuration/environment');

module.exports = {
    entry: {
        app: path.resolve(environment.paths.source, 'index.ts'),
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js',
        },
    },
    output: {
        filename: 'js/[name].js',
        path: environment.paths.output,
    },
    module: {
        rules: [{
            test: /\.((c|sa|sc)ss)$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
            exclude: /(node_modules)/,
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['babel-plugin-root-import'],
                },
            },
        },
        {
            test: /\.(png|gif|jpe?g|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/design/[name].[hash:6].[ext]',
                        publicPath: '../',
                        limit: environment.limits.images,
                    },
                },
            ],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(environment.paths.static),
                to: path.resolve(environment.paths.output),
                toType: 'dir',
                globOptions: {
                    ignore: ['*.DS_Store', 'Thumbs.db', '**/index.html'],
                },
            },
            ],
        }),
        new HTMLWebpackPlugin({
            template: `${path.resolve(environment.paths.static)}/index.html`,
            filename: 'index.html',
            inject: 'body',
        }),
    ],
    target: 'web',
};
