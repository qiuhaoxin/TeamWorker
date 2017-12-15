var queryString=require('querystring')
var url=require('url')
var md5=require('md5.js')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var config=require('../../config')
var path=require('path')
function Utility(){


}
Utility.prototype={
	isEmpty:function(str){
        var Reg=/^\s*$/;
        if(Reg.test(str)){
        	return true;
        }
        return false;
	},
	//MD5 加密
	md5Encode:function(str){
        var encodeResult=new md5().update(str).digest('hex');
        console.log("encodeResult is "+encodeResult);
	},
    assetsPath:function(_path){
        var assetsSubDirectory=process.env.NODE_ENV==='production'?config.build.assetsSubDirectory:config.dev.assetsSubDirectory;
        return path.posix.join(assetsSubDirectory,_path);
    },
	styleLoader:function(options){
        var output=[];
        var loaders=this.cssLoader(options);
        for(var extension in loaders){
        	var loader=loaders[extension];
            console.log("extension is "+extension);
        	output.push({
                test:'/\.'+extension+'$/',
                loader:loader
        	})
        }
        console.log("output is "+JSON.stringify(output));
        return output;
	},
	cssLoader:function(options){
        options=options||[];
        function generateLoaders(loaders){
            var sourceLoader=loaders.map(function(loader){
                 var extraParamChar;
                 if(/\?/.test(loader)){
                 	loader=loader.replace(/\?/,'-loader?');
                 	extraParamChar='&';
                 }else{
                 	loader=loader+'-loader';
                 	extraParamChar="?"
                 }
                 return loader+(options.sourceMap?extraParamChar+"sourceMap":'')
            }).join('!')
            if(options.extract){
            	return ExtractTextPlugin.extract('vue-style-loader',sourceLoader);
            }else{
            	return ['vue-style-loader',sourceLoader].join('!');
            }
        }
        return {
        	css:generateLoaders(['css']),
        	postcss:generateLoaders(['css']),
        	less:generateLoaders(['css','less']),
        	sass:generateLoaders(['css','sass?indentedSyntax']),
            scss:generateLoaders(['css','sass'])
        }
	}
};
module.exports=new Utility();