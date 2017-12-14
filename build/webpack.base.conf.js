var path=require('path');
var config=require('../config');

var projectRoot=path.resolve(__dirname,"../");
var webpack=require("webpack");

var env=process.env.NODE_ENV

var cssSourceMapDev=(env==='development' && config.dev.cssSourceMap);
var cssSourceMapProd=(env==='production' && config.build.cssSourceSourceMap);
var useCssSourceMap=cssSourceMapProd ||cssSourceMapProd



module.exports={
	entry:{
		app:'../web/main.js'
	},
	output:{
		path:config.build.assetsRoot,
		publicPath:env==='production'?config.build.assetsPublicPath:config.dev.assetsPublicPath,
		filename:'[name].js'
	},
	resolve:{
		extensions:['.json','.js','.css','.less','.scss','.vue'],
        // fallback:[path.join(__dirname,"../node_modules")],
        // alias:{
        //     'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery')
        // }
	},
	// resolveLoader:{
 //        fallback:[path.join(__dirname,"../node_modules")]
	// },
	module:{
		loaders:[
            {
            	test:'/\.vue$/',
            	loader:'vue'
            },
            {
            	test:'/\.css$/',
            	loader:'css-loader'
            },
            {
            	test:'/\.less$/',
            	loader:'style-loader',

            },
            {
            	test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'file-loader?name=[name].[ext]',
            }
		]
	}
}