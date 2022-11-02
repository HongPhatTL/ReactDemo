var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: './src/index_bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
              },
            {test : /\.css$/, use:['style-loader', 'css-loader']},
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
    ]

};