var merge=require('webpack-merge');
var proEnv=require('./prod.env');

module.exports=merge(proEnv,{
	NODE_ENV:'"development"'
})