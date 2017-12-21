<template>
   <section class='tw-mainpage-page'>
        <header>
            <div class='header-top'>
                <div class='left_panel'>{{companyName}}</div><div class='right_panel'><span>{{userName}}</span><span>退出</span></div>
            </div>
            <div class='header-bottom'>
                <ul class='tw-tab-wrapper'>
                   <li v-for='dataItem in ModuleData'>
                      <div>{{dataItem.FName}}</div>
                   </li>
                </ul>
            </div>
        </header>
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
   </section>
</template>
<script>
     import {getModuleData} from '../../service/userSer';
     import loading from '../../components/loading'
     export default{
         data(){
           return {
               companyName:'K3/WISE 移动应用系统部',
               userName:'邱浩新',
               ModuleData:[],
               showLoading:true

           }
         },
         created(){
            this.initModuleData();
         },
         components:{
            loading
         },
         methods:{
            async initModuleData(){
                var result=await getModuleData('15817497845');
                console.log("result is "+JSON.stringify(result));
                if(result.code==1&&result.count>0){
                    this.ModuleData=result['data'];
                }
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
   .left_panel,.right_panel{@include flexJA(row);flex-grow:1;height:100%;}
   .left_panel{justify-content:flex-start;padding-left:50px;align-items:center;}
   .header-bottom{
       flex-grow:1
   }
   .tw-tab-wrapper{
      display:inline-flex;
   }
</style>
