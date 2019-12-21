<template>
  <div class="login">
    <el-form class="login_need" :ruler='roulerFrom' >
        <img src="../../assets/img/logo_index.png" alt="">
        <el-form-item class="phone" prop="name">
            <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item class="code" prop="code">
            <el-input placeholder="请输入验证码" class="code_in"></el-input>
            <el-button plain>获取验证码</el-button>
        </el-form-item>

        <el-form-item style="margin: 0;height:40px" prop="check">
            <el-checkbox>请选择该项</el-checkbox>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" class="login_button">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rulerFrom: {
        name: '',
        code: '',
        check: false
      },
      rulers: {
        name: [
          { required: true, message: '请输入活动名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  height: 100vh;
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_need{
      width: 330px;
      height: 380px;
      background-color: white;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img{
          height: 40px;
          margin-top: 10px;
      }
      .phone{
          width: 96%;
          height: 60px;
          margin-top: 10px;
          margin-bottom: 0
      }
      .code{
          width: 98%;
          height: 60px;
          margin-bottom: 0;
          .code_in {
              width: 60%;
              margin: 5px;
          }
      }
      .login_button {
          width: 39vh;
      }
  }
}
</style>
