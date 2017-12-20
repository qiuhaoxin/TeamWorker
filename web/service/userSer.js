//前端访问后台的业务逻辑
import fetch from '../js/fetch'

/*
* 注册
*/
export const register=(FName,FMobile,FPsw,FImageCode)=>fetch('/api/register',{FName,FMobile,FPsw,FImageCode},'POST')

/*
* 登陆
*/
export const login=(FMobile,FPsw)=>fetch(FMobile,FPsw)

/*
 * search user
 */
export const searchUser=(FMobile)=>fetch('/api/searchUser',{FMobile},"POST")

export const getImageCode=()=>fetch('/api/getImageCode')


