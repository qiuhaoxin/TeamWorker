var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var $sql=require('../sql/sqlMapping');
var sqlConfig=require('../sql/sqlconfig');
var queryString=require('querystring');
var url=require('url');
var userLogic=require("../logic/userLogic");
console.log("sql config is "+JSON.stringify(sqlConfig));

var pool=mysql.createPool(sqlConfig.sqlConfig);
/*
 * 用户接口 
 */
router.use('/login',(req,res)=>{
	var params=url.parse(req.url);
	console.log("params is "+JSON.stringify(params));
    params=queryString.parse(params.query);
    userLogic.login(params.FName,params.psw,(error,result)=>{
        if(error)throw error;
        console.log("result is "+JSON.stringify(result));
    });
})

router.use('/register',(req,res)=>{
      var params=req.body;
      console.log("params is "+JSON.stringify(params));

      // var params=url.parse(req.url);
      // params=queryString.parse(params.query);
      // console.log("addUser params is "+JSON.stringify(params));
      userLogic.addUser(params,function(error,result){
           if(error){
              throw error;
           }
           console.log("result is "+JSON.stringify(result));
           res.send({
              code:1,
              data:JSON.stringify(result),
              msg:'获取数据成功！'
           })
           return;
      })
})

router.use('/getUserList',(req,res)=>{
  console.log("getUserList!");
  userLogic.getUserList(function(error,result){
       if(error) throw error;
       console.log("userList is "+JSON.stringify(result));
  })
})



module.exports=router;