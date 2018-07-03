<template>
  <div id="app" class="wrapper">
    <router-view/>
  </div>
</template>
<script>
  export default {
      name: 'App'
  }
</script>
<style>
  .wrapper {
      box-sizing: border-box;
      /* display: flex;
        justify-content: center;
        align-items: center; */
      min-height: 600px;
      font-size: 32px;
  }
</style>


