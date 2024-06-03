// webpack.config.js

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "child_process": false,
      "crypto": false,
      "net": false,
      "tls": false,
      "zlib": false,
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
    },
  },
};
