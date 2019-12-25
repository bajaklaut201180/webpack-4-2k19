# webpack-4-2k19, seperate production & development mode
I wanted to share webpack 4 configuration to build a distribution folder for frontend project.
## powered by nodejs
Install [Node.js](https://nodejs.org/en/) if you don't have it yet
## checked packaged.json
Check the dependencies in package.json, use npm install `npm i webpack webpack-cli webpack-merge webpack-dev-server css-loader file-loader html-loader sass-loader style-loader babel-loader node-sass @babel/core @babel/preset-env clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin --save-dev`.
Also install `npm i bootstrap jquery popper.js`
## Add Script on packaged.json
# start:dev, use webpack-dev-serve and load webpack.dev.js
    "start:dev": "webpack-dev-server --config webpack.dev.js",
# start, load webpack.dev.js
    "start": "webpack --config webpack.dev.js",
# build, load webpack.prod.js
    "build": "webpack --config webpack.prod.js",