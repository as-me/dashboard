var path = require("path");
var webpack = require("webpack");

// For conveniance we create variable that holds the directory to bower_components
var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    context: __dirname,
    // We split the entry into two specific chunks. Our app and vendors. Vendors
    // specify that react should be part of that chunk
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
        vendors: ['react']
    },
    // The resolve.alias object takes require expressions
    // (require('react')) as keys and filepath to actual
    // module as values
    resolve: {
        alias: {}
    },

    // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
    // and create a vendors.js file. As you can see the first argument matches the key
    // of the entry, "vendors"
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        // There is no reason for WebPack to parse this file
        noParse: [],
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: [bower_dir, node_modules_dir]
            }
        ]
    }

};

config.addVendor('react', bower_dir + '/react/react.js');
config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/js/bootstrap.min.js');
config.addVendor('bootstrap.css', bower_dir + '/bootstrap/dist/css/bootstrap.min.css');

module.exports = config;
