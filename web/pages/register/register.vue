<template>
     <section class='tw-register-pages'>
        <div class='tw-register-topbanner'>
            <p class='tw-register-title'>{{title}}</p>

        </div>
        <div class='form-unit'>
            <p>注册新账号</p>
            <form class='tw-register-form'>
                <div class='form-field'>
                    <input type='text' name="phone" placeholder='手机号' v-model='FMobile'/>
                    <span class='icon icon-circle-o '></span>
                </div>
                <div class='form-field'>
                    <input type='text' name="FName" placeholder='您的名称' v-model='FName'/>
                    <span class='icon icon-circle-o '></span>
                </div>
                <div class='imgCode'>
                   <input v-model='FImageCode' placeholder="请输入验证码"/>
                   <img :src='FImage' class='tw-register-border'/>
                </div>
                <div class='form-field'>
                    <input type='password' placeholder='密码（字母，数字，至少6位）' v-model='FPsw'/>
                    <span></span>
                </div>
                <div class='form-field repeatPsw'>
                    <input type='password' placeholder='重复密码' v-model='RepeatPsw'/>
                    <span></span>
                </div>
                <span class='tw-register-tip' v-if='tip!=""'>{{tip}}</span>
     
                <button class='btn btn-register' @click='register'>注册</button>
                <div class='line'></div>
                <button class='btn btn-register' @click='register'></button>
            </form>
        </div>
     </section>
</template>
<script>
    import Utility from '../../js/utils'
    import {register,getImageCode} from '../../service/userSer'
    export default{
        data(){
           return {
              title:'teamworker',
              imageCode:null,
              FMobile:'',
              FName:'',
              FPsw:'',
              RepeatPsw:'',
              tip:'',
              FImage:'',
              FImageCode:''

           }
        },
        created(){
           this.getImageCode()
        },
        methods:{
            async getImageCode(){
                var result=await getImageCode();
                if(result && result['code']==1 && result['count']==1){
                    this.FImage=result['data'][0]['image'];
                }
                console.log("result is "+JSON.stringify(result));
            },
            async register(e){
                e.preventDefault();
                console.log("reigister!")
                if(Utility.isEmpty(this.FMobile)){
                    this.tip="请输入手机号！";
                    return;
                }
                if(!Utility.isPhone(this.FMobile)){
                    this.tip="请正确输入手机号！";
                    return;
                }
                if(Utility.isEmpty(this.FName)){
                    this.tip="请输入用户名！";
                    return;
                }
                if(Utility.isEmpty(this.FPsw)){
                    this.tip="请输入密码！";
                    return;
                }
                if(Utility.isEmpty(this.FImageCode)){
                   this.tiop="请输入验证码！";
                   return;
                }
                if(!Utility.isValidPsw(this.FPsw)){
                    this.tip="密码包含非法字符！";
                    return;
                }
                console.log("psw is "+this.FPsw+" and reset is "+this.RepeatPsw);
                if(this.FPsw!=this.RepeatPsw){
                    this.tip="两次输入的密码不匹配!";
                    return;
                }
                console.log("after MD5 is "+Utility.MD5(this.FPsw));
                this.FPsw=String(Utility.MD5(this.FPsw));
                this.userInfo=await register(this.FName,this.FMobile,this.FPsw,this.FImageCode);
                if(this.userInfo && this.userInfo.code==1 && this.userInfo.count==1){
                   this.$router.push({
                     path:'/mainPage'
                   })
                }
                console.log("user if "+JSON.stringify(this.userInfo));

            }
        }
    }
</script>
<style lang='scss'>
     @import '../../style/mixin';
    @import '../../style/common';
    .tw-register-pages{
       @include flexJA(column,center,center);
       backgroundColor:#ccc;
    }
    .tw-register-topbanner{
       height:100px;width:100%;background-position:center bottom;position:relative;background-size:cover;
       position:relative;
    }
    .tw-register-title{
        @include fac(24px,#000);position:absolute;bottom:0;text-align:center;width:100%;font-weight:bolder;

    }
     .form-unit{
       margin:30px auto;padding:0 20px;margin-bottom:100px;width:100%;max-width:360px;
    }
    .imgCode{
       display:flex;flex-direction:row;justify-content:center;align-items:center;border:1px solid #ccc;padding:7px 9px;margin-bottom:25px;
    }
    .imgCode input{flex-grow:2;height:100%;font-size:18px;outline:none;}
    .form-unit>p{
        text-align:center;color:#9a9a9a;margin-bottom:25px;
    }
    .form-field{position:relative;}
    .form-field input[type=text],.form-field input[type=password]{
        padding:12px;border:1px solid #d9d9d9;width:100%;margin-bottom:25px;border-radius:3px;font-size:16px;
    }
    .repeatPsw{
        margin-top:20px;
    }
    .form-field input[type=text]:focus,.form-field input[type=password]:focus{
        -webkit-appearance:none;
        border-color:#a6a6a6;
    }
    .form-field input[type=password]{
        margin-bottom:7px;
    }
    .btn-register{
       position:relative;background-color:#3DA8F5;color:#fff;width:100%;padding:12px;margin-top:7px;
       border-radius:3px;font-size:19px;letter-spacing:3px;margin-bottom:25px;
    }
    .tw-register-tip{
        color:red;
    }
     .line{
        @include line(100%,1px,#ccc,scaleY(.5));
    }
    
</style>