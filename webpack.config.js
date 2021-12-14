const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  resolve: {
    extensions:['.js','.vue'],
    alias: {
      '~': path.resolve(__dirname,'src'),
      'assets': path.resolve(__dirname,'src/assets')
    }
  },

  entry: './src/main.js',
  //전에 parcel index.html은 진입점을 index.html로 설정하겠다는 것이었음
  //webpack은 js파일을 진입점으로 삼는다.
  //파일을 읽어들이기 시작하는 진입점 설정
  output: {
    // path: path.resolve(__dirname,'dist'),
    // filename:'main.js'
    //사실 주석처리해도 dist라는 파일로 만들고, entry이름의 js파일을 가져옴
    clean: true
  //결과물(번들)을 반환하는 설정
  },

  module: {
    rules: [
      {
        test:/\.vue$/,
        use: 'vue-loader' //로더가 하나일 때는 []배열형태로 사용할 필요없음 
      },
      {
        test: /\.s?css$/,
          //순서 중요!
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin(),
  ]
}