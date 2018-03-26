<template>
  <div
    class="head_bg"
    :style="{ backgroundImage: 'url(' + bgUrl + ')' ,height: bgHeight + 'px' }" >
  </div>
</template>
<script>
export default {
name:"header-activity",
props:{
  bgUrl:{
    type:String,
    default:"../../../static/images/head.jpg"
  },
  bgHeight:{
    type:Number,
    default:400
  }
},
created(){
}
}
</script>

<style scoped>
.head_bg{
  width: 100%;
  background-position: center;
}
</style>
