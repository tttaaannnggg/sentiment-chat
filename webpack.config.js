module.exports = {
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
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}
