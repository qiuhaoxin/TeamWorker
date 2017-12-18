//前端访问后台的业务逻辑
import fetch from '../js/fetch'

/*
* 注册
*/
export const register=(userName,mobile,psw)=>fetch('/api/register',{userName,mobile,psw},'POST')

/*
* 登陆
*/
export const login=(mobile,psw)=>fetch(mobile,psw)
