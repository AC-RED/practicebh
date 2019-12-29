<template>
  <el-container>
    <el-aside :style="{width: collaspse ? '60px' : '230px'}" style="transition:all 0.2s;background-color:#353b4e;min-height:100vh">
      <left-nav :collaspse = 'collaspse'></left-nav>
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
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collaspse: false
    }
  },
  created () {
    eventBus.$on('changeCollapse', () => {
      this.collaspse = !this.collaspse
    })
  }
}
</script>

<style>

</style>
