<template>
    <section class='tw-forgot-page'>
        <div class='tw-forgot-topbanner'>
            <p class='tw-forgot-title'>{{title}}</p>
        </div>
        <div class='form-unit'>
            <p>forgot password</p>
            <form class='tw-forgot-form'>
                <div class='form-field'>
                    <input type='text' name="phone" placeholder='please input you mobile' v-model='FMobile'/>
                    <span class='icon icon-circle-o '></span>
                </div>
                <span class='tw-forgot-tip' v-if='tip!=""'>{{tip}}</span>

                <button class='btn btn-reset' @click='resetPsw'>reset password</button>
                <div class='line'></div>
            </form>
        </div>
    </section>
</template>
<script>
    import Utility from '../../js/utils'
    import {searchUser} from '../../service/userSer'
    export default{
       data(){
          return {
              title:'teamworker',
              tip:'',
              FMobile:''
          }
       },
       methods:{
           async resetPsw(e){
              e.preventDefault();
              if(Utility.isEmpty(this.FMobile)){
                 this.tip="please input you mobile!";
                 return;
              }
              this.tip='';
              var result=await searchUser(this.FMobile)
              if(result['code']==1&&result['count']>0){
                   console.log("jump!");
                   this.$router.push({
                      path:'/login'
                   })
              }
           }
       }
    }
</script>

<style lang='scss' scoped>
    @import '../../style/mixin';
    .tw-forgot-page{
       @include flexJA(column,center,center);
       backgroundColor:#ccc;
    }
    .tw-forgot-topbanner{
       height:100px;width:100%;background-position:center bottom;position:relative;background-size:cover;
       position:relative;
    }
    .tw-forgot-title{
        @include fac(24px,#000);position:absolute;bottom:0;text-align:center;width:100%;font-weight:bolder;

    }
    .tw-forgot-tip{
        color:red;
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
    .btn-reset{
       position:relative;background-color:#3DA8F5;color:#fff;width:100%;padding:12px;margin-top:7px;
       border-radius:3px;font-size:19px;letter-spacing:3px;margin-bottom:25px;
    }
</style>