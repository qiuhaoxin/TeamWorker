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
           res.send({
              code:1,
              data:JSON.stringify(result),
              msg:'获取数据成功！'
           })
           return;
      })
})
/*
*  search person by phone number
*/
router.use('/searchUser',(req,res)=>{
    var params=req.body;
    let returnRes={code:1,msg:'no this person!',data:null,count:0};
    userLogic.searchPerson(params.FMobile,function(error,result){
      if(error)throw error;
      console.log("result is "+JSON.stringify(result));
      if(result!=null&&result.length>0){
        result=result[0];
        if(result['result']==1){
          returnRes['code']=1,
          returnRes['data']=null,
          returnRes['msg']='获取数据成功！',
          returnRes['count']=1;
        }
      }else{
          returnRes['code']=1,
          returnRes['data']=null,
          returnRes['msg']='no this person！',
          returnRes['count']=0;
      }
      console.log("returnres is "+JSON.stringify(returnRes));
      res.send(returnRes);
      return;
    })
})
/*
 * get image code
 */
router.use('/getImageCode',(req,res)=>{
    userLogic.getImageCode(function(error,data){
      var cap=parseInt(Math.random() * 9000 +1000);
      res.cookie('cap',cap,{maxAge:300000,httpOnly:true});
      res.send({
        code:1,
        data:[{image:'data:image/png;base64,'+data}],
        msg:'get Image Code successfully!',
        count:1
      })
    });
})

router.use('/getUserList',(req,res)=>{
  console.log("getUserList!");
  userLogic.getUserList(function(error,result){
       if(error) throw error;
       console.log("userList is "+JSON.stringify(result));
  })
})



module.exports=router;