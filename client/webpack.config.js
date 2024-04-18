const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    static: path.join(__dirname, `public`),
    historyApiFallback: true,
    compress: false,
    open: true,
    port: 1337
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ]
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  devtool: `source-map`
};
