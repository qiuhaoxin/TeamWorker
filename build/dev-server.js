//构建开发环境

require('../public/js/versionCheck')()
var express=require('express')
var path=require('path')
var webpack=require('webpack')
var config=require('../config')

var opn=require('opn')
var webpackConfig=require('./webpack.dev.conf')
var proxyMiddleware=require('http-proxy-middleware')

var port=process.env.PORT||config.dev.port
var app=express();

var compiler=webpack(webpackConfig)


var devMiddleware=require('webpack-dev-middleware')(compiler,{
	publicPath:webpackConfig.output.publicPath,
	stats:{
		colors:true,
		chunks:false
	}
})
var hotMiddleware=require('webpack-hot-middleware')(compiler,{
	log:()=>{

	}
})

compiler.plugin('complication',function(complication){
      complication.plugin('html-webpack-plugin-after-emit',function(data,cb){
         hotMiddleware.publish({action:'reload'})
         cb()
      })
})

var context=config.dev.context

switch(process.env.NODE_ENV){
	case 'local':var proxypath='http://localhost:8081'; break;
	default:var proxypath=config.dev.proxypath;
}
var options={
	target:proxypath,
	changeOrigin:true
}
if(context.length){
	app.use(proxyMiddleware(context,options))
}

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)
app.use(hotMiddleware)

var uri="http://localhost:"+port
devMiddleware.waitUntilValid(function(){
	console.log("listening at "+uri+"\n");
})
module.export=app.listen(port,function(err){
	if(err)return;
	console.log("listening!");
})
