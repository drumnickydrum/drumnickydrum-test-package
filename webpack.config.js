const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'swc-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
