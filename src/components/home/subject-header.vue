<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="6" class="head-left">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育股份有限公司</span>
    </el-col>
    <el-col :span="6" class="head-right">
      <el-row type="flex" justify="end" align="middle">
        <img src="../../assets/img/avatar.jpg" alt />
        <el-dropdown class="down-list">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>Git地址</el-dropdown-item>
            <hr>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.head-left {
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  .title {
    margin-left: 4px;
    font-size: 16px;
  }
}

.head-right {
    margin-top: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  .down-list {
      margin-left: 14px;
  }
}
</style>
