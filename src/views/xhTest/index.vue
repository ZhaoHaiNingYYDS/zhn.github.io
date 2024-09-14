<template>
  <div class="page-box">
    <div class="nav">
      <router-link to="/threeView">threeView</router-link> |
      <router-link to="/giveView">giveView</router-link>
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.page-box{
  width: 100%;
  height: 100%;
  background: #1ab394;
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    a{
      color: hotpink;
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
