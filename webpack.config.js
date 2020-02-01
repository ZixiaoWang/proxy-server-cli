const webpack = require('webpack');
const NodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },

    externals: [NodeExternals()],

    mode: 'production',

    target: 'node',

    node: {
        __dirname: 'mock'
    },

    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },

    resolve: {
        extensions: ['.ts']
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: '#!/usr/bin/env node',
            raw: true
        })
    ]
}