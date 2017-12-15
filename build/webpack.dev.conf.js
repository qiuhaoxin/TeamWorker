var config=require('../config')
var webpack=require('webpack')
var merge=require('webpack-merge')
var Utility=require('../public/js/utils')


var baseWebPackConfig=require('./webpack.base.conf')
var htmlWebPackPlugin=require('html-webpack-plugin')

console.log("baseWeb"+JSON.stringify(baseWebPackConfig));

Object.keys(baseWebPackConfig.entry).forEach(function(name){
    baseWebPackConfig.entry[name]=["./build/dev-client"].concat(baseWebPackConfig.entry[name]);
})
module.exports=merge(baseWebPackConfig,{
	module:{
		loaders:Utility.styleLoader({
			sourceMap:config.dev.cssSourceMap
		})
	},
	devtool:'#eval-source-map',
	plugins:[
           new webpack.DefinePlugin({
           	   'process.env':config.dev.env
           }),
           new webpack.optimize.OccurrenceOrderPlugin(),
           new webpack.HotModuleReplacementPlugin(),
           new webpack.NoEmitOnErrorsPlugin(),

           new htmlWebPackPlugin({
           	    filename:'index.html',
           	    template:'web/index.html',
           	    inject:true
           })
	]
})