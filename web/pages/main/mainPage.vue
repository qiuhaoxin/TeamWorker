<template>
   <section class='tw-mainpage-page'>
        <header>
            <div class='header-top'>
                <div class='left_panel'>{{companyName}}</div>
                <div class='right_panel'>
                   <span>{{userName}}</span><router-link to='/login' class='loginout'><span >退出</span></router-link>
                </div>
            </div>
            <div class='header-bottom'>
                <ul class='tw-tab-wrapper'>
                   <li v-for='dataItem in ModuleData' @click="moduleClick(dataItem)" :class="[moduleClass(dataItem)? 'activeModule':'normalModule','tw-mainpage-module']">
                      <div>{{dataItem.FName}}</div>
                   </li>
                </ul>
                <div class='tw-mainpage-search'>
                    <span class='tw-search-span'>BUG</span><input placehold='input bug' class='tw-search-input'/><span class='tw-search-search'>search</span>
                </div>
            </div>
        </header>
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
        <div>
            <router-view></router-view>
        </div>
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
               curModule:'',
               moduleClass:function(dataItem){
               console.log("dataItem is "+JSON.stringify(dataItem)+"and curModule is "+this.curModule);
                    return dataItem['FName']==this.curModule;
               },
               isCurModule:true,
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
                    this.curModule=this.ModuleData[0]['FName'];
                    console.log("curModule is "+this.curModule);
                }
            },
            moduleClick(dataItem){
                console.log("dataItem is "+JSON.stringify(dataItem));
                this.curModule=dataItem['FName'];
                this.$router.push({
                    path:dataItem.FModuleLink
                })
            }
         }
     }
</script>
<style lang='scss' scoped>
   @import '../../style/mixin';
   header{
       height:100px;background:#143d05;@include flexJA();color:#fff;flex:1px 1 1;
   }
   .header-top{
       @include flexJA(row,center,center);width:100%;flex-grow:1
   }
   .activeModule{background:#e5e5e5 !important;color:#444 !important;}
   .normalModule{background:#236d09 !important;}
   .left_panel,.right_panel{@include flexJA(row);flex-grow:1;height:100%;}
   .left_panel{justify-content:flex-start;padding-left:50px;align-items:center;flex-grow:2}
   .right_panel{flex-grow:1;justify-content:flex-end;padding-right:50px;}
   .loginout{padding-left:15px;color:#fff;}
   .header-bottom{
       flex-grow:2;width:100%;position:relative;display:inline-flex;align-items:flex-end;
   }
   .tw-tab-wrapper{
      display:inline-flex;min-height:45px;
   }
   .tw-tab-wrapper li{
      padding:9px 19px;margin:0 3px;
   }
   .tw-search-search,.tw-search-input,.tw-search-span{
      padding:10px 10px;
   }
</style>
