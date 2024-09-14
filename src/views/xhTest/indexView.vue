<template>
  <div class="page-box">
    <div class="nav">
      <router-link to="/threeView">threeView</router-link> |
      <router-link to="/giveView">giveView</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
<script setup>

</script>

<style lang="scss" scoped>
.page-box{
  width: 100%;
  height: 100%;
  //background: #1ab394;
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #1ab394;
    a{
      color: #fff;
      margin: 0 20px;
      &:hover{
        color: #000;
        text-decoration: underline;
        text-underline: hotpink;
      }
    }
  }
}
</style>
