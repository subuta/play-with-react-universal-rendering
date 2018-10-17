const path = require('path')

module.exports = {
  mode: 'development',

  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'client.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader',
        options: {
          // Ignore `.babelrc` for webpack.
          babelrc: false,
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env',
              {
                'useBuiltIns': 'entry'
              }
            ]
          ]
        }
      }
    ]
  }
}
