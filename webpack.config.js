var path = require('path');

module.exports = {

    devtool: 'cheap-module-source-map',

    entry: {
        app: './webpack/app/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'webpack', 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ],

        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map'
            }
        ]
    }
};
