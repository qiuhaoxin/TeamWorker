<template>
   <section class='tw-mainpage-page'>
        <header>
            <div class='header-top'>
                <div>{{companyName}}</div><div><span>{{userName}}</span><span>退出</span></div>
            </div>
            <div class='header-bottom'>
            </div>
        </header>
   </section>
</template>
<script>
     export default{
         data(){
           return {
               companyName:'K3/WISE 移动应用系统部',
               userName:'邱浩新',

           }
         }
     }
</script>
<style lang='scss' scoped>
   @import '../../style/mixin';
   header{
       height:100px;background:#036;@include flexJA();color:#fff;
   }
   .header-top{
       @include flexJA(row,center);width:100%;
   }
</style>
