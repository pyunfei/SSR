const path = require('path');
const base = require('./webpack.base');
const { smart } = require('webpack-merge');

module.exports = smart(base, {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.js'
  },
})