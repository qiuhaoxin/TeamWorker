var queryString=require('querystring');
var url=require('url');
var md5=require('md5.js');
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
	}
};
module.exports=new Utility();