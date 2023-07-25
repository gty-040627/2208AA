<template>
  <!-- 背景图片 -->
  <div class="bg">
    <div class="zhong">
      <!-- 顶部标题 -->
      <div class="title">
        <img src="../assets/common/login-logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <div class="info">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item>
            <el-input
              v-model="ruleForm.mobile"
              prefix-icon="el-icon-user-solid"
              placeholder="mobile"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="ruleForm.password"
              prefix-icon="el-icon-s-goods"
              placeholder="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 详情内容 -->
      <div class="desc">
        仅用于IT培训教学使用,为保障您的个人信息安全,请勿向平台录入任何个人敏感信息
        (如手机号、身份证号等) !
      </div>
    </div>
  </div>
</template>

<script>
import { Querylogin } from '../api/api'
import { setToken } from '../../untils/auth'
import * as TS from '../../untils/constant.js'
export default {
  data() {
    return {
      ruleForm: {
        mobile: '13800000002',
        password: '888itcast.CN764%...'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Querylogin(this.ruleForm).then((res) => {
            // console.log(res, 'res')
            const { code, data, message } = res
            if (code === 10000) {
              //储存
              setToken(data)
              //提示登陆成功
              this.$notify({
                title: '提示',
                message,
                duration: TS
              })
              this.$router.push('/')
            } else {
              this.$message.success(message)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/common/login.jpg');
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhong {
  padding: 30px;
  text-align: center;
  width: 500px;
  height: 400px;
  // background-color: pink;
}
.el-form {
  margin-top: 40px;
}
.desc {
  color: #fff;
  font-size: 14px;
}

::v-deep .el-input__inner {
  background-color: #ffffffbb;
  height: 47px;
  line-height: 47px;
  // color: #606d72;
}
::v-deep .el-input__icon {
  font-size: 20px;
}

.el-button {
  width: 440px;
  height: 50px;
  font-size: 20px;
  background-color: #407efd;
}
</style>
