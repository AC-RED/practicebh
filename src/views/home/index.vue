<template>
  <el-container>
    <el-aside style="background-color:#353b4e;min-height:100vh;width:230px">
      <left-nav></left-nav>
    </el-aside>

  <el-container>

    <el-header>
      <sub-header></sub-header>
    </el-header>

    <el-main style="padding:0">
      <router-view></router-view>
    </el-main>

  </el-container>
</el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
