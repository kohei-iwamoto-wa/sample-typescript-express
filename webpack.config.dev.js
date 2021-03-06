const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: ['./src/server.ts','./src/form.ts'],
    target: 'node',               // Module not found: Error: Can't resolve 'fs'とかいっぱい出たら、この行書き忘れ
    externals: [nodeExternals()], 
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                loader: 'tslint-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    emitErrors: true
                }
            },
            {
              test: /\.css$/,
              use:[
                    'style-loader',
                    'css-loader'
                  ]
            },
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.dev.json'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: '[name].bumdle.js',
        path: path.resolve(__dirname, 'dist')
    }
};