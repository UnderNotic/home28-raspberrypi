import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack'
import path from 'path';

export default () => ({
    entry: {
        app: [
            // entry point
            path.join(__dirname, 'src/app/index.js'),
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[hash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // Specify the common bundle's name.
            minChunks: Infinity,
            filename: '[hash].vendors.js',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            favicon: path.join(__dirname, 'src/image/favicon.ico'),
            template: path.join(__dirname, 'src/index.html')
        }),
        new ExtractTextPlugin('bundle.css'),

        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'stage-2',
                                'react',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: [
                        'css-loader?importLoaders=1',
                        //'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]'
                }
            }
        ]
    }
})

//api urls in webpack global variables