const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./index.html",
                    to: `${__dirname}/dist/index.html`,
                },
                {
                    from: "./app/style/",
                    to: `${__dirname}/dist/app/style/`,
                },
                {
                    from: "./app/assets/",
                    to: `${__dirname}/dist/app/assets/`,
                },
            ],
        }),
    ],

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
        path: path.resolve(__dirname, "dist/dist"),
        filename: "bundle.js"
    },
}