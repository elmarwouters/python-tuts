const path = require("path");
const BundleTracker = require('webpack-bundle-tracker')

const isProduction = process.env.NODE_ENV === "production";

const config = {
    context: __dirname,
    entry: [
        "./src/ts/init.ts",
    ],
    output: {
        filename: '[name]-[hash].ts',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                include: path.resolve(__dirname, 'js'),
                loader: "ts-loader",
                exclude: [
                    "/node_modules/"
                ],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
