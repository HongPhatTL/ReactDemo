var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: './index_bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
              },
            {test : /\.css$/, use:['style-loader', 'css-loader','postcss-loader']},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './src/index.html',
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "build")
        },
        client: {
            logging: 'info',
            progress: true,
            reconnect: true,
        },
        server: "http",
        historyApiFallback: true,
    },
};