<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="6" class="head-left">
      <i @click="collaspseOrOpen" :class="{'el-icon-s-unfold':collaspse,'el-icon-s-fold':!collaspse}"></i>
      <span class="title">江苏传智播客教育股份有限公司</span>
    </el-col>
    <el-col :span="6" class="head-right">
      <el-row type="flex" justify="end" align="middle">
        <img :src="userInfo.photo?userInfo.photo:defaultImg">
        <el-dropdown class="down-list" @command='logout'>
          <span class="el-dropdown-link">
            {{userInfo.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='user'>个人信息</el-dropdown-item>
            <el-dropdown-item command='gitspc'>Git地址</el-dropdown-item>
            <hr>
            <el-dropdown-item command='logout'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collaspse: false,
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  created () {
    // let token = window.localStorage.getItem('user-token')
    this.getUserInfo()

    // 在实例创建完成时立即开始监听
    eventBus.$on('updateUserInfoSuccess', () => {
      this.getUserInfo()
    })
  },
  methods: {
    collaspseOrOpen () {
      this.collaspse = !this.collaspse
      eventBus.$emit('changeCollapse')
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      //   method: 'get',
      // headers: {
      //   Authorization: 'Bearer ' + token
      // }
      }).then(result => {
        this.userInfo = result.data
      })
    },
    logout (command) {
      if (command === 'logout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (command === 'gitspc') {
        window.location.href = 'https://github.com/shuiruohanyu/89heimatoutiao'
      } else if (command === 'user') {
        this.$router.push('/home/account')
      }
    }
  }
}
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
