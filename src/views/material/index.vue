<template>
  <el-card>
      <crumbs slot="header">
          <template slot="title">素材管理</template>
      </crumbs>

      <el-tabs v-model="activeName">
          <el-tab-pane label="全部素材" name="all">
              <div class="img-list">
                  <el-card class="img-card" v-for="item in list" :key="item.id">
                      <img :src="item.url" alt="">
                      <el-row class="operate" type="flex" align="middle" justify="space-around">
                          <i class="el-icon-star-on"></i>
                          <i class="el-icon-delete-solid"></i>
                      </el-row>
                  </el-card>
              </div>
          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect"></el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    getAllMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: false }
      }).then(result => {
        this.list = result.data.results
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
    .img-card{
        width: 240px;
        height: 200px;
        margin: 20px 30px;
        position: relative;
        img{
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
            background-color: rgb(248, 242, 242)
        }
    }
}
</style>
