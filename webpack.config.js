module.exports = {
  entry: './src/main.js',
  output: {
    path: "./out",
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  }
}
