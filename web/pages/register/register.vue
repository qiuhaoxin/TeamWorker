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
                <div class='form-field'>
                    <input type='password' placeholder='密码（字母，数字，至少8、6位）' v-model='FPsw'/>
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
    import {register} from '../../service/userSer'
    export default{
        data(){
           return {
              title:'teamworker',
              FMobile:'',
              FName:'',
              FPsw:'',
              tip:''

           }
        },
        methods:{
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
                if(!Utility.isValidPsw(this.FPsw)){
                    this.tip="密码包含非法字符！";
                    return;
                }
                this.userInfo=await register(this.FName,this.FMobile,this.FPsw);
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
    .form-unit>p{
        text-align:center;color:#9a9a9a;margin-bottom:25px;
    }
    .form-field{position:relative;}
    .form-field input[type=text],.form-field input[type=password]{
        padding:12px;border:1px solid #d9d9d9;width:100%;margin-bottom:25px;border-radius:3px;font-size:16px;
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