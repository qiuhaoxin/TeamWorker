var queryString=require('querystring');
var url=require('url');
function Utility(){


}
Utility.prototype={
	isEmpty:function(str){
        var Reg=/^\s*$/;
        if(Reg.test(str)){
        	return true;
        }
        return false;
	}
};
module.exports=new Utility();