const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMap: isDevelopment,
                    },
                },
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        modules: [
          'node_modules',
        ],
    },
    plugins: [
        new HtmlWebPackPlugin ({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
}
