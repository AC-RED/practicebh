<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules" ref="myFrom">
        <el-form-item prop='mobile'>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop='code'>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>

          <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>

        <el-form-item prop='check'>
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="width:100%" @click='submitLogin'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{
          required: true,
          message: '请输入您的手机号'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '请输入正确的手机号'
        }],
        code: [{
          required: true,
          message: '请输入您的验证码'
        }, {
          pattern: /^\d{6}$/,
          message: '请输入正确的验证码'
        }],
        check: [{
          validator: (rule, value, callback) => {
            if (value) {
              callback()
            } else {
              callback(new Error('请无条件同意该协定'))
            }
          }
        }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myFrom.validate((allIn) => {
        if (allIn) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            // window.localStorage.setItem('user-token', result.token)
            // console.log(result)
            this.$router.push('./home')
          // }).catch(error => {
          //   console.log(error)
          //   this.$message({
          //     message: '请输入正确的手机号和验证码',
          //     type: 'warning'
          //   })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 490px;
    height: 360px;
    .title {
      text-align: center;
      img {
        height: 44px;
      }
    }
  }
}
</style>
