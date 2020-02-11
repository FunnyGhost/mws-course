const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const entry = {
  main: "./js/main.es6.js"
};

const restaurantEntry = {
  restaurant: "./js/restaurant_info.es6.js"
};

const cssRule = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader"
  })
};

const plugins = [
  new ExtractTextPlugin({ filename: "[name].css", allChunks: true }),
  new HtmlWebpackPlugin({ template: "./index.html" }),
  new ScriptExtHtmlWebpackPlugin({
    module: /\.mjs$/,
    custom: [
      {
        test: /\.js$/,
        attribute: "nomodule",
        value: ""
      }
    ]
  }),
  new CopyPlugin([
    { from: "./data", to: "data" },
    { from: "./img", to: "img" }
  ])
];

const restaurantPlugins = [
  new ExtractTextPlugin({ filename: "[name].css", allChunks: true }),
  new HtmlWebpackPlugin({ template: "./restaurant.html" }),
  new ScriptExtHtmlWebpackPlugin({
    module: /\.mjs$/,
    custom: [
      {
        test: /\.js$/,
        attribute: "nomodule",
        value: ""
      }
    ]
  })
];

const legacyConfig = {
  entry,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: false
                }
              }
            ]
          ]
        }
      },
      cssRule
    ]
  },
  plugins
};

const moduleConfig = {
  entry,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].mjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: true
                }
              }
            ]
          ]
        }
      },
      cssRule
    ]
  },
  plugins
};

const restaurantsLegacyConfig = {
  entry: restaurantEntry,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: false
                }
              }
            ]
          ]
        }
      },
      cssRule
    ]
  },
  plugins: restaurantPlugins
};

const restaurantsModuleConfig = {
  entry: restaurantEntry,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].mjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: true
                }
              }
            ]
          ]
        }
      },
      cssRule
    ]
  },
  plugins: restaurantPlugins
};

module.exports = [
  legacyConfig,
  moduleConfig,
  restaurantsLegacyConfig,
  restaurantsModuleConfig
];