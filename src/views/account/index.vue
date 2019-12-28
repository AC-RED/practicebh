<template>
  <el-card>
      <crumbs slot="header">
          <template slot="title">账户信息</template>
      </crumbs>

      <el-upload class="head-upload" action="" :show-file-list="false">
          <img src="../../assets/img/default.gif" alt="">
      </el-upload>

      <el-form style="margin-left:100px" label-width="100px">
          <el-form-item label="用户名">
              <el-input style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="简介">
              <el-input style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
              <el-input style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
              <el-input disabled style="width:30%"></el-input>
          </el-form-item>

          <el-form-item>
              <el-button type="primary">保存信息</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.head-upload{
    width: 200px;
    height: 200px;
    position: absolute;
    right: 300px;
    border: 1px dashed gray;
    border-radius: 50%;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%
    }
}
</style>
