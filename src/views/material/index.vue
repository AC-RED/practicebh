<template>
  <el-card v-loading='loading'>
    <crumbs slot="header">
      <template slot="title">素材管理</template>
    </crumbs>

    <el-row type="flex" justify="end">
      <el-upload action="" :http-request="uploadImg" :show-file-list="false">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-row>

    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i @click="collectOrcancel(item)" :style="{color: item.is_collected? 'red' : ''}" class="el-icon-star-on"></i>
              <i @click="delMaterial(item.id)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>

        <el-row type="flex" justify="center" align="middle" style="height:80px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="page.total"
            @current-change="chengePage"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>

        <el-row type="flex" justify="center" align="middle" style="height:80px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="page.total"
            @current-change="chengePage"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all',
      list: [],
      page: {
        total: 0,
        pageSize: 12,
        currentPage: 1
      }
    }
  },
  methods: {
    delMaterial (id) {
      this.$confirm('确定删除？').then(() => {
        this.$axios({
          url: `/user/images/${id}`,
          method: 'delete'
        }).then(() => {
          this.getAllMaterial()
        })
      })
    },
    collectOrcancel (row) {
      this.$axios({
        url: `/user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected
        }
      }).then(() => {
        this.getAllMaterial()
      })
    },
    uploadImg (params) {
      this.loading = true
      let form = new FormData() // 添加文件到formData
      form.append('image', params.file)

      this.$axios({
        method: 'post',
        url: '/user/images',
        data: form
      }).then(result => {
        this.loading = false
        this.getAllMaterial()
      })
    },
    chengePage (newPage) {
      this.page.currentPage = newPage
      this.getAllMaterial()
    },
    changeTab () {
      this.page.currentPage = 1
      this.getAllMaterial()
    },
    getAllMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getAllMaterial()
  }
}
</script>

<style lang='less' scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  .img-card {
    width: 240px;
    height: 200px;
    margin: 20px 30px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      width: 100%;
      height: 30px;
      font-size: 20px;
      position: absolute;
      bottom: 0;
      left: 0px;
      background-color: rgb(248, 242, 242);
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
