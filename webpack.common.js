'use strict';

const path = require('path');
const webpack = require('webpack');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SOURCE_ROOT = __dirname + '/src/main';

module.exports = {
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TSConfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },
    entry: {
        index: SOURCE_ROOT + '/main.ts',
    },
    output: {
        filename: (chunkData) => {
            return 'index.js';
        },
        path: path.resolve(__dirname, 'dist'),
    },
    node: {
        __filename: true,
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                    {
                        loader: 'ts-loader',
                    },
                    {
                        loader: 'webpack-import-glob-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'webpack-import-glob-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'clientlib-[name]/[name].css',
        }),
    ],
    stats: {
        assetsSort: 'chunks',
        builtAt: true,
        children: false,
        chunkGroups: true,
        chunkOrigins: true,
        colors: false,
        errors: true,
        errorDetails: true,
        env: true,
        modules: false,
        performance: true,
        providedExports: false,
        source: false,
        warnings: true,
    },
};
