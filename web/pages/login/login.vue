<template>
     <section class='tw-login-pages'>
        <div class='tw-login-topbanner'>
            <p class='tw-login-title'>{{title}}</p>
        </div>
        <div class='form-unit'>
            <form class='tw-login-form'>
                <div class='form-field'>
                    <input type='text' name="phone" placeholder='用户名/手机号' v-model='mobile'/>
                    <span class='icon icon-circle-o '></span>
                </div>
                <div class='form-field'>
                    <input type='password' placeholder='密码' v-model='psw'/>
                    <span></span>
                </div>
                <div class='forgetPsw'>
                   忘记密码?
                </div>
                <span class='tw-login-tip' v-if='tip!=""''>{{tip}}</span>
                <button class='btn btn-login' @click='login'>登录</button>
                <div class='line'></div>
                <div class='account'>
                    <span>还没有账号？</span><router-link to='/register'><span class='newAccount'>注册新账号</span></router-link>
                </div>

            </form>
        </div>

       
         
     </section>

</template>

<script>
    import Utility from '../../js/utils'
    export default{
        data(){
           return{
               title:'teamworker',
               mobile:'',
               psw:'',
               inputHolder:'用户名或手机号',
               tip:''
           } 
        },
        methods:{
            login:function(e){
              e.preventDefault();
              if(!Utility.isPhone(this.mobile)){
                 this.tip="请输入正确的手机号码";
                 return;
              }
              if(Utility.isEmpty(this.psw)){
                 this.tip="请输入密码！";
                 return;
              }
              this.psw=Utility.MD5(this.psw);
              this.tip='';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    @import '../../style/common';
    .tw-login-pages{
       @include flexJA(column,center,center);
       backgroundColor:#ccc;
    }
    .tw-login-topbanner{
       height:100px;width:100%;background-position:center bottom;position:relative;background-size:cover;
       position:relative;
    }
    .tw-login-title{
        @include fac(24px,#000);position:absolute;bottom:0;text-align:center;width:100%;font-weight:bolder;

    }
    .form-unit{
       margin:30px auto;padding:0 20px;margin-bottom:100px;width:100%;max-width:360px;
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
    .forgetPsw{
        @include flexJA(row,flex-end,center);color:#9f9f9f;
    }
    .btn-login{
       position:relative;background-color:#3DA8F5;color:#fff;width:100%;padding:12px;margin-top:7px;
       border-radius:3px;font-size:19px;letter-spacing:3px;margin-bottom:25px;
    }
    .line{
        @include line(100%,1px,#ccc,scaleY(.5));
    }
    .tw-login-tip{
        color:red;
    }
    .account{
       width:100%;margin-top:20px;text-align:center;
    }
    .account span:first-child{
       color:#a6a6a6;
    }
    .newAccount{
        color:#03a9f4;
    }
    .newAccount:hover{
       cursor:pointer;
    }
</style>