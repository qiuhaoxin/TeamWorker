var path=require('path');
var config=require('../config');

var projectRoot=path.resolve(__dirname,"../");
var webpack=require("webpack");

var env=process.env.NODE_ENV;
var Utility=require('../public/js/utils')

var cssSourceMapDev=(env==='development' && config.dev.cssSourceMap);
var cssSourceMapProd=(env==='production' && config.build.cssSourceSourceMap);
var useCssSourceMap=cssSourceMapProd ||cssSourceMapProd

console.log("public path is "+config.dev.assetsPublicPath);

module.exports={
	entry:{
		app:'./web/main.js'
	},
	output:{
		path:config.build.assetsRoot,
		publicPath:env==='production'?config.build.assetsPublicPath:config.dev.assetsPublicPath,
		filename:'[name].js'
	},
	resolve:{
		extensions:['.json','.js','.css','.less','.vue'],
        // fallback:[path.join(__dirname,"../node_modules")],
         alias: {
            'vue$': 'vue/dist/vue.js',
            // 'src': path.resolve(__dirname, '../src'),
            // 'assets': path.resolve(__dirname, '../src/assets'),
            // 'components': path.resolve(__dirname, '../src/components')
        }
	},
	// resolveLoader:{
 //        fallback:[path.join(__dirname,"../node_modules")]
	// },
	module:{
		loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
            	test:'/\.css$/',
            	loader:'css-loader'
            },
             {
                test: /\.js$/,
                loader: 'babel-loader',
                include:projectRoot,
                exclude: /node_modules/
            },
            {
            	test:'/\.less$/',
            	loader:'style-loader',

            },
            {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            // query: {
            //     limit: 10000,
            //     name: Utility.assetsPath('img/[name].[ext]')
            // }
            },
            {
                 test:'/\.json$/',
                 loader:'json-loader'
            },
            {
            	test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'file-loader?name=[name].[ext]',
            }
		]
	},
    // vue: {
    //     loaders: Utility.cssLoader({ sourceMap: false }),
    //     postcss: [
    //         require('autoprefixer')({
    //             browsers: ['last 2 versions']
    //         })
    //     ]
    // }
}