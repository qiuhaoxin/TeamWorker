/*
 * 用户业务逻辑 登陆，添加，查询
 */
var Capchas=require('../model/captchas');
 var mysql=require('mysql');
 var sqlConfig=require('../sql/sqlconfig');
 var Utility=require('../../public/js/utils');

 var pool=mysql.createPool(sqlConfig['sqlConfig']);

 //数据库执行结果统一返回格式：{data:[],result:'',code:0} code:   1:执行数据查询成功！ -1.执行数据查询失败
 var userLogic={
 	//执行SQL
 	execSql:function(sql,params,cb){
        pool.query(sql,params,cb);
 	},
 	//用户登陆
 	login:function(userName,usePsw,cb){
         if(Utility.isEmpty(FName)){
         	return "用户名不能为空！";
         } 	 
         usePsw= Utility.md5Encode(usePsw);
         console.log("userPsw is "+usePsw);
         if(this.searchPerson(userName)){
            this.execSql("select 1 as result from t_person where FName=? and FPsw=?",[userName,usePsw],cb);
         }else{
         	return {mes:'用户名不存在！'};
         }

 	},
 	//同一个组织下是否已存在相同的用户，以手机为标准
 	searchPerson:function(FMobile,cb){
         this.execSql("select 1 as result from t_person where FMobile=?",[FMobile],cb);
 	},
 	//添加用户 真实姓名，电话号码，密码是必录
 	addUser:function(params,cb){
 		if(Utility.isEmpty(params.FName)){
 			return {mes:'用户名不能为空！'}
 		}
 		if(Utility.isEmpty(params.FMobile)){
 			return {mes:'联系电话不能为空！'}
 		}
 		if(Utility.isEmpty(params.FPsw)){
 			return {mes:'密码不能为空!'};
 		}

 		this.execSql("insert into t_person set ?",params,cb)
 	},
 	//删除用户
 	deleteUser:function(mobile){
       if(Utility.isEmpty(mobile)){
       	   return {result:"请输入删除的用户名或手机号码！",data:[],code:-2};
       }

 	},
 	//获取当前组织下的所有用户
 	getUserList:function(cb){
        this.execSql("select * from t_person",[],cb); 
 	},
 	//获取部门
 	getDeptList:function(){

 	},
  getImageCode:function(cb){
       try{
          let result=Capchas.getCaptchas();
           //console.log("base 64 is "+base64);
           if(cb){
              cb(null,result);
           }
       }catch(e){
           if(cb){
              cb(e,result)
           }
       }
    
  },
 	//修改密码
 	changePsw:function(mobile,newPsw,oldPsw){

        this.execSql("update t_person set FPsw=? where (FName=? or FMobile=?) and FPsw=?",[newPsw,mobile,mobile,oldPsw])
 	},
  //获取系统模块，暂时不考虑权限问题
  getModuleData:function(FMobile,cb){
     
     this.execSql("select * from t_Module ",[],cb);   
  }
 	
 }
 module.exports=userLogic;