const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/s,
                use: [
                    miniCssExtractPlugin.loader, // 3. Extract CSS into files
                    "css-loader", // 2. turns css into commonjs
                    "sass-loader" // 1. turns sass into css
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new optimizeCssAssetsPlugin(),
            new terserPlugin(),
            new htmlWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            })
        ]
    },
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});