/*
 * 用户业务逻辑 登陆，添加，查询
 */

 var mysql=require('mysql');
 var sqlConfig=require('../sql/sqlconfig');
 var Utility=require('../../public/js/utils');

 var pool=mysql.createPool(sqlConfig['sqlConfig']);


 var userLogic={
 	//执行SQL
 	execSql:function(sql,params,cb){
        pool.query(sql,params,cb);
 	},
 	//用户登陆
 	login:function(userName,usePsw,cb){
         if(Utility.isEmpty(userName)){
         	return "用户名不能为空！";
         } 	 
         if(this._isExitPerson(userName)){
            this.execSql("select 1 as result from t_person where FName=? and FPsw=?",[userName,usePsw],cb);
         }else{
         	return {mes:'用户名不存在！'};
         }

 	},
 	//同一个组织下是否已存在相同的用户，以手机/登陆名为标准
 	_isExitPerson:function(mobile){
         execSql("select 1 as result from t_person where FName=? or FMobile=?",[mobile],function(error,result){
             if(error)throw error;
             console.log("result is "+JSON.stringify(result));
         });
 	},
 	//添加用户
 	addUser:function(params){

 	}
 }
 module.exports=userLogic;