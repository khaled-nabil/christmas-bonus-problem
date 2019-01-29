# Configuring Webpack for ES6 and JSX
## Install webpack and webpack-cli
	npm i webpack webpack-cli --save-dev
## Install webpack html plugin
    npm i html-webpack-plugin html-loader --save-dev
## Create a build in package.json
	"scripts": {
	  "build": "webpack --mode production"
	}
## Install Babel
### Install babel preset env. for compiling Javascript ES6 code down to ES5 (please note that babel-preset-es2015 is now deprecated)
### Install babel preset react for compiling JSX and other stuff down to Javascript
	npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
## Create file .babelrc
	touch .babelrc
### Configure .babelrc
	{
	  "presets": ["@babel/preset-env", "@babel/preset-react"]
	}
## Create webpack config
	touch webpack.config.js
### Add the following configuration
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    module.exports = {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
    };	
    

# Configure webpack dev server
## Install webpack-dev-server
    npm i webpack-dev-server --save-dev
## Add start script into package.json scripts
    "start": "webpack-dev-server --open --mode development",
    
# Installing React
	npm i react react-dom --save-dev
