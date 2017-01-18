import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import webpack from 'webpack'
import path from 'path';

export default () => ({
    entry: {
        app: [
            // activate HMR for React
            'react-hot-loader/patch',

            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint
            'webpack-dev-server/client?http://localhost:8080',

            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
            'webpack/hot/only-dev-server',

            // entry point
            path.join(__dirname, 'src/app/index.js'),
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[hash].bundle.js',
        path: path.join(__dirname, 'dist'),
        // necessary for HMR to know where to load the hot update chunks
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // Specify the common bundle's name.
            minChunks: Infinity,
            filename: '[hash].vendor.js',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            favicon: path.join(__dirname, 'src/image/favicon.ico'),
            template: path.join(__dirname, 'src/index.html')
        }),
        new ExtractTextPlugin('bundle.css'),
        // enable HMR globally
        new HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new NamedModulesPlugin(),
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
                            ],
                            plugins: [
                                // Enables React code to work with HMR.
                                'react-hot-loader/babel'
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