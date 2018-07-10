//webpack是基于node的所以要遵循commonjs的规范
module.exports={
  entry:'',//入口
  output:{
    filename:'build.js',
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
  plugins:[],//插件的配置
  mode:'development',//可以更改模式
  resolve:{},//配置解析
}
//1.webpack 中如何配置开发服务器 webpack-dev-server
//2. webpack 插件 1将html 打包到build下可以自动引入HTML
