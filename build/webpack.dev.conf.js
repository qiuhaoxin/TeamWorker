var config=require('../config')
var webpack=require('webpack')
var merge=require('webpack-merge')
var Utility=require('../public/js/util')


var baseWebPackConfig=require('./webpack.base.conf')
var htmlWebPackPlugin=require('html-webpack-plugin')

Object.keys(baseWebPackConfig.entry).forEach(function(name){
    baseWebPackConfig.entry[name]=["./build/dev-client"].concat(baseWebPackConfig.entry[name]);
})
module.exports=merge(baseWebPackConfig,{
	module:{
		loaders:Utility.styleLoaders({
			sourceMap:config.dev.cssSourceMap
		})
	},
	devtol:'#eval-source-map',
	plugins:[
           new webpack.DefinePlugin({
           	   'process.env':config.dev.env
           }),
           new webpack.optimize.OccurenceOrderPlugin(),
           new htmlWebPackPlugin({
           	    filename:'index.html',
           	    template:'../web/index.html',
           	    favicon:'favicon.ico',
           	    inject:true
           })
	]
})