const webpack = require("webpack");
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    output: {
      libraryTarget: "umd"
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8501,
      sockHost: "localhost"
    },
    plugins: [
      // no chunks
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  filenameHashing: false
};
