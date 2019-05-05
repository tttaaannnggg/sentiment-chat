module.exports = {
  mode: 'development',
  module: {
    rules :[
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  context: __dirname + "/client" + "/components",
  entry: "./App.js",
  output: {
    filename: "App.js",
    path: __dirname + "/dist",
  },
}
