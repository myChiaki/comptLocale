const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const readDir = require('fs').readdirSync
const files = readDir('./src/locale/lang')
const entry = {}
files.forEach(file => {
  const name = file.split('.')[0]
  entry[name] = './src/locale/lang/' + file
})

module.exports = {
  devtool: 'source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/locale'),
    publicPath: 'dist/locale/',
    filename: '[name].js',
    library: 'component-locale/locale',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true
    })
  ]
}
