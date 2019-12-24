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
        <el-radio-group @change="changeCondition" v-model="fromData.status">
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
        <el-select @change="changeCondition" v-model="fromData.channel_id">
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
        @change="changeCondition"
          value-format="yyyy-MM-dd"
          v-model="fromData.dateRange"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-col>
    </el-row>

    <!-- 主体 -->
    <el-row class="total">
      <span>123456789</span>
    </el-row>

    <!-- 循环模板 -->

    <el-row v-for="item in list" :key="item.id.toString()" class="article-item" type="flex" justify="space-between">
      <el-col :span="10">
        <el-row type="flex">
          <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt />

          <div class="info">
            <span>{{item.title}}</span>
            <el-tag :type='item.status | filterType' class="tag">{{item.status | filterStatus}}</el-tag>
            <span class="date">{{item.pubdate}}</span>
          </div>
        </el-row>
      </el-col>
      <el-col :span="6" class="right">
        <el-row type="flex" justify="end">
            <span><i class="el-icon-edit"></i>修改</span>
            <span><i class="el-icon-delete"></i>删除</span>
        </el-row>
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
      channels: [],
      list: [],
      defaultImg: require('../../assets/img/back.png')
    }
  },
  filters: {
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'

        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'

        default:
          break
      }
    }
  },

  methods: {
    changeCondition () {
      let params = {
        status: this.fromData.status === 5 ? null : this.fromData.status,
        channel_id: this.fromData.channel_id,
        begin_pubdate: this.fromData.dateRange.length ? this.fromData.dateRange[0] : null,
        end_pubdate: this.fromData.dateRange.length > 1 ? this.fromData.dateRange[1] : null

      }
      this.gitArticles(params)
      debugger
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(results => {
        this.channels = results.data.channels
      })
    },
    gitArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results
      })
    }
  },
  created () {
    this.getChannels()
    this.gitArticles()
  }
}
</script>

<style lang='less' scoped>
.articles {
  .searchTool {
    height: 60px;
    padding-left: 50px;
  }
  .total {
    margin: 50px 0;
    height: 30px;
    border-bottom: 1px dashed gray
  }
  .article-item {
      margin: 20px 0;
      padding: 10px 0;
      border-bottom: 1px solid rgb(243, 205, 134);
    img {
      width: 150px;
      height: 100px;
      margin-right: 10px;
      border-radius: 10px
    }
    .info {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .date{
            color: rgb(219, 212, 212);
            font-size: 12px
        }
        .tag{
            max-width: 70px;
            text-align: center
        }
    }
    .right {
        span {
            margin-right: 8px;
            font-size: 14px;
            cursor: pointer;
        }
    }
  }
}
</style>
