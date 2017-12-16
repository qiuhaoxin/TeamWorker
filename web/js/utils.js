var md5=require('md5.js')
class Utility{
	constructor(){
         console.log("hei create");
	}
	//参数str是否为空
	static isEmpty(str){
		console.log("str is "+str);
		var emptyReg=/^\s*$/;
		if(emptyReg.test(str)){
			return true;
		}
		return false;
	}
	static isNumber(str){
     
	}
	//验证手机号
	static isPhone(phoneStr){
        var phoneReg=/^1[0-9]{10}$/;
        if(phoneStr.match(phoneReg)){
            return true;
        }
        return false;
	}
	//MD5加密
	static MD5(str){
        var encodeResult=new md5().update(str).digest('hex');
        return encodeResult;
	}
}
module.exports=Utility