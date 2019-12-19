<template>
  <el-container>
    <el-aside style="background-color:#353b4e;height:100vh;width:230px">
      <left-nav></left-nav>
    </el-aside>

  <el-container>

    <el-header>
      <sub-header></sub-header>
    </el-header>

    <el-main>Main</el-main>

  </el-container>
</el-container>
</template>

<script>
import leftNav from '../../components/home/left-nav'
import subHead from '../../components/home/subject-header'
export default {
  components: {
    'left-nav': leftNav,
    'sub-header': subHead
  }
}
</script>

<style>

</style>
