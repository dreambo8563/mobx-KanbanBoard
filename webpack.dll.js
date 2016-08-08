var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        react: ['react', 'react-dom', 'react-router', 'react-addons-css-transition-group'],
        mobx: ['mobx', 'mobx-react'],
        fetch: ['whatwg-fetch'],
        dnd: ['react-dnd', 'react-dnd-html5-backend']
    },
    output: {
        path: path.join(__dirname, "dist", "dll"),
        filename: "dll.[name].js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "dll", "[name]-manifest.json"),
            name: "[name]_[hash]"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
