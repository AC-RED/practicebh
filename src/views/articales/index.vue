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
        <el-radio-group v-model="fromData.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>频道列表</span>
      </el-col>

      <el-col :span="18">
        <el-select v-model="fromData.channel_id">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>时间选择</span>
      </el-col>

      <el-col :span="18">
        <el-date-picker
          v-model="fromData.dateRange"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      fromData: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      channels: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(results => {
        this.channels = results.data.channels
      })
    }
  },
  created () {
    this.getChannels()
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
