//前端访问后台的业务逻辑
import fetch from '../js/fetch'

/*
* 注册
*/
export const register=(FName,FMobile,FPsw)=>fetch('/api/register',{FName,FMobile,FPsw},'POST')

/*
* 登陆
*/
export const login=(mobile,psw)=>fetch(mobile,psw)
