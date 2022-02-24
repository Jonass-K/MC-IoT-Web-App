const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    entry: "./app/src/index.ts",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
}