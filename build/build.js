
//构建部署环境
require('../public/js/versionCheck')();
require('shelljs/global')

env.NODE_ENV="production"

var path=require('path')
var config=require('../config')
var ora=require('ora')
var webpack=require('webpack')

var webpackConfig=require('./webpack.product.conf')

var assetsPath=path.join(config.build.assetsRoot,config.build.assetsSubDirectory)
rm('-rf',assetsPath)
mkdir('-p',assetsPath)
// cp('-R','static/*',assetsPath)

webpack(webpackConfig,function(err,stats){
	if(err)throw err


})