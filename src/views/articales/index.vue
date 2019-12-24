<template>
  <el-card class="articles">
    <crumbs slot="header">
      <template slot="title">文章列表</template>
    </crumbs>

    <el-row class="searchTool">
      <el-col :span="2">
        <span>文章状态</span>
      </el-col>

      <el-col :span="18">
        <el-radio-group v-model="radio">
          <el-radio :label="3">全部</el-radio>
          <el-radio :label="3">草稿</el-radio>
          <el-radio :label="3">待审核</el-radio>
          <el-radio :label="3">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>频道列表</span>
      </el-col>

      <el-col :span="18">
        <el-select>
          <el-option></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>时间选择</span>
      </el-col>

      <el-col :span="18">
        <el-time-picker
          is-range
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-time-picker>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
.articles {
  .searchTool {
    height: 60px;
    padding-left: 50px;
  }
}
</style>
