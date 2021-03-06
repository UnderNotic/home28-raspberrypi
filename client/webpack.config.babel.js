import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PurifyPlugin from "purifycss-webpack";
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import webpack from 'webpack';
import path from 'path';
import glob from 'glob';

export default env => {
    console.log("Environment is ", env);
    return {
        entry: {
            app: [
                // async await
                'babel-polyfill',

                // fetch polyffil
                'whatwg-fetch',

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
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'inline-source-map',
        devServer: {
            hot: true,
            contentBase: path.join(__dirname, 'dist'),
            publicPath: '/',
            historyApiFallback: true
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
            new PurifyPlugin({
                // Give paths to parse for rules. These should be absolute!
                paths: glob.sync(path.join(__dirname, 'src/app/**/*.jsx')).concat(glob.sync(path.join(__dirname, 'src/*.html')))
            }),
            new HotModuleReplacementPlugin(),

            // prints more readable module names in the browser console on HMR updates
            new NamedModulesPlugin(),
            new CleanWebpackPlugin(['dist']),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env || "development")
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
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
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            'css-loader',
                            'postcss-loader'
                        ]
                    })
                },
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: 'file-loader?name=fonts/[name].[ext]'
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
    };
};


//api urls in webpack global variables