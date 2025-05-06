const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');
const package = require('./package.json');

// Read the userscript.meta.js file content
const userscriptMetaContent = fs.readFileSync('./userscript.meta.js', 'utf8');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'userscript.user.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /==\/?UserScript==|@|\/\/ ==UserScript==|\/\/ ==/i,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    // Plugin to prepend the userscript metadata to the output file
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          const outputPath = path.resolve(__dirname, 'dist', 'userscript.user.js');
          const content = fs.readFileSync(outputPath, 'utf8');
          fs.writeFileSync(outputPath, userscriptMetaContent + '\n' + content);
        });
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
