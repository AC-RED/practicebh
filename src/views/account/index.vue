<template>
  <el-card v-loading='loading'>
      <crumbs slot="header">
          <template slot="title">账户信息</template>
      </crumbs>

      <el-upload :http-request="uploadImg" class="head-upload" action="" :show-file-list="false">
          <img :src="formData.photo? formData.photo:defaultImg" alt="">
      </el-upload>

      <el-form ref="myForm" style="margin-left:100px" label-width="100px" :model="formData" :rules="rules">
          <el-form-item label="用户名" prop="name">
              <el-input v-model="formData.name" style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="intro">
              <el-input v-model="formData.intro" style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
              <el-input v-model="formData.email" style="width:30%"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
              <el-input v-model="formData.mobile" disabled style="width:30%"></el-input>
          </el-form-item>

          <el-form-item>
              <el-button @click="saveUserInfo" type="primary">保存信息</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      defaultImg: require('../../assets/img/default.gif'),
      rules: {
        name: [{ required: true, message: '用户名不能为空' }, { min: 1, max: 7, message: '用户名的长度限制为1到7个字符' }],
        email: [{ required: true, message: '邮箱不能为空' }, { pattern: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/, message: '邮箱格式不正确' }]

      },
      loading: false
    }
  },
  methods: {
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        url: '/user/photo',
        method: 'patch',
        data
      }).then(result => {
        this.formData.photo = result.data.photo
        this.loading = false
      })
    },
    saveUserInfo () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.formData
          }).then(result => {
            this.$message({
              type: 'success',
              message: '保存用户信息成功'
            })
          })
        }
      })
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
.head-upload{
    position: absolute;
    right: 300px;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        z-index: 10;
    }
}
</style>
