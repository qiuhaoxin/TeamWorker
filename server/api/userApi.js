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
function write(res,data,next){
   res.send(data)
   if(next){
     next();
   }
}
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
      let params=req.body;
      console.log("cookies is "+req.cookies);
      const cap=req.cookies.cap;
      if(!cap){
        res.send({
          code:1,
          msg:'验证码失效！',
          count:0,
          data:null
        })
        return;
      }
      console.log("params is "+JSON.stringify(params));
      console.log("FImageCode is "+params["FImageCode"]);
      if(cap.toString()!=params['FImageCode']){
         res.send({
            code:1,
            msg:'验证码错误!',
            count:0,
            data:null
         })
         return;
      }
      delete params.FImageCode;
      userLogic.addUser(params,function(error,result){
           if(error){
              throw error;
           }
           res.send({
              code:1,
              data:JSON.stringify(result),
              msg:'获取数据成功！',
              count:1
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
      res.cookie('cap',data['cap'],{maxAge:300000,httpOnly:true});
      res.send({
        code:1,
        data:[{image:'data:image/png;base64,'+data['base64']}],
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

router.use('/getModuleData',(req,res)=>{
   var result={code:1,count:0,data:null,msg:''};
   console.log("hei getModuleData!");
   var params=req.body;
   userLogic.getModuleData(params['FMobile'],function(error,data){
       if(error){
          result['msg']=error;
       }
       result.count=data.length;
       result.msg="获取数据列表成功！";
       result.data=data;
       write(res,result);
   })
})



module.exports=router;