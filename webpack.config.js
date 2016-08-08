var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  cache: true,
  // entry: [
  //   'react-hot-loader/patch',
  //   'webpack-dev-server/client?http://localhost:3000',
  //   'webpack/hot/only-dev-server',
  //   'whatwg-fetch',
  //   './src/index'
  // ],
  entry: {
    app: './src/index',
    vendor: [
      'react',
      'react-dom',
      'mobx',
      'whatwg-fetch',
      'react-router',
      'react-dnd',
      'react-dnd-html5-backend',
      'mobx-react',
      'react-addons-css-transition-group'
    ],
    // vendor: ['jquery', 'rxjs/Observable'],
  },
  // entry: {
  //   app: './src/index',
  //   react: ['react', 'react-dom', 'react-router', 'react-addons-css-transition-group'],
  //   mobx: ['mobx', 'mobx-react'],
  //   fetch: ['whatwg-fetch'],
  //   dnd: ['react-dnd', 'react-dnd-html5-backend']
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(),
    //   manifest: require('./dist/dll/react-manifest.json')
    // }),
    // new webpack.DllReferencePlugin({
    //     context: process.cwd(),
    //   manifest: require('./dist/dll/mobx-manifest.json')
    // }),
    // new webpack.DllReferencePlugin({
    //     context: process.cwd(),
    //   manifest: require('./dist/dll/fetch-manifest.json')
    // }),
    // new webpack.DllReferencePlugin({
    //     context: process.cwd(),
    //   manifest: require('./dist/dll/dnd-manifest.json')
    // }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  devtool: 'source-map',
  debug: true
};
