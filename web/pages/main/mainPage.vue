<template>
   <section class='tw-mainpage-page'>
        <header>
            <div class='header-top'>
                <div>{{companyName}}</div><div><span>{{userName}}</span><span>退出</span></div>
            </div>
            <div class='header-bottom'>
                <ul>
                   <li></li>
                </ul>

            </div>
        </header>
   </section>
</template>
<script>
     import {getModuleData} from '../../service/userSer'
     export default{
         data(){
           return {
               companyName:'K3/WISE 移动应用系统部',
               userName:'邱浩新',

           }
         },
         created(){
            this.initModuleData();
         },
         methods:{
            async initModuleData(){
                console.log("hei");
                var result=await getModuleData('15817497845');
                console.log("result is "+JSON.stringify(result));
            }
         }
     }
</script>
<style lang='scss' scoped>
   @import '../../style/mixin';
   header{
       height:100px;background:#036;@include flexJA();color:#fff;flex:1px 1 1;
   }
   .header-top{
       @include flexJA(row,center);width:100%;flex-grow:1
   }
   .header-bottom{
       flex-grow:1
   }
</style>
