//webpack是基于node的所以要遵循commonjs的规范
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
  entry:'',//入口
  output:{
    filename:'build.[hash:8].js',//每次打包后都会有新的hash.生成
    //绝对路径
    path:path.resolve('./build')
  },//出口
  devServer:{
    contentBase:'./build',
    port:3000,
    compress:true,//服务器压缩
    open:true,//自动打开浏览器
    hot:true,
  },//开发服务器
  module:{},//模块配置
  plugins:[
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title:'啦啦啦',
      hash:true,
      // minify:{
      //   removeAttributeQuotes:true,
      //   collapseWhitespace:true
      // }
    })
],//插件的配置
  mode:'development',//可以更改模式
  resolve:{},//配置解析
}
//1.webpack 中如何配置开发服务器 webpack-dev-server
//2. webpack 插件 1将html 打包到build下可以自动引入HTML
