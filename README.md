#Install webpack and webpack-cli
	npm i webpack webpack-cli --save-dev
#Create a build in package.json
	"scripts": {
	  "build": "webpack --mode production"
	}
# Install babel preset env. for compiling Javascript ES6 code down to ES5 (please note that babel-preset-es2015 is now deprecated)
# Install babel preset react for compiling JSX and other stuff down to Javascript
	npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
#Create file .babelrc with the following:
	touch .babelrc
#add the following
	{
	  "presets": ["@babel/preset-env", "@babel/preset-react"]
	}
#Create webpack config
	touch webpack.config.js
#add the following configuration
	module.exports = {
	  module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			  loader: "babel-loader"
			}
		  }
		]
	  }
	};
# Now we can install React
	npm i react react-dom --save-dev
