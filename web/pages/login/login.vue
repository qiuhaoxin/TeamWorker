<template>
     <div class='tw-pages'>
           <p>{{title}}</p>
          <input :placeholder='inputHolder'/>
     </div>

</template>

<script>
    export default{
        data(){
           return{
               title:'teamworker',
               inputHolder:'input you login name!'
           } 
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .tw-pages{
       background:blue;
    }
</style>