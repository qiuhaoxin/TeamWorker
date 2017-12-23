/*
* 下拉框
*/
<template>
   <div name='pulldownlist' class='tw-pdl-wrapper'>
       <ul class='tw-pdl-list'>
          <li v-for='item in dataSet' class='tw-pdl-item'>
               <div @click='clickItem(item)'>{{item.FName}}</div>
          </li>
       </ul>
   </div>
</template>
<script>
    export default{
        data(){
           return {
           }
        },
        mounted(){
           console.log("flag is "+JSON.stringify(this.dataSet));
        },
        props:['flag','dataSet'],
        methods:{
            clickItem(item){
               if(item.FType=='Link'&&item.FLink!=''){
                  this.$router.push({
                      path:item.FLink
                  })
               }
            }
        }
    }
</script>
<style lang='scss' scoped>
   @import '../style/mixin';
   @import '../style/common';
   .tw-pdl-wrapper{
      position:absolute;top:22px;left:0;min-width:100px;overflow:hidden;background:#fff;z-index:10;color:#555;
      @include borderRadius(2px)
   }
   .tw-pdl-list{
       @include flexJA(column,center,center);min-width:100px;overflow:hidden;
   }
   .tw-pdl-item{
      width:100%;position:relative;height:30px;line-height:28px;text-align:center;
   }
   .tw-pdl-item:before{
       content:'';
       position:absolute;
       border-bottom:1px solid  #ccc;
       width:100%;left:0;
       height:1px;
       -webkit-transform:scaleY(.5);
       transform:scaleY(.5);
   }

</style>