<template>
  <div class="login">
    <div class="login-item">
      <img src="../assets/logo.png" alt="" />
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :size="formSize" status-icon>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" :prefix-icon="Lock" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录 </el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from 'element-plus'
import { User, Lock } from "@element-plus/icons-vue"
import { qsueryLogin } from "../api/api"
import * as TS from "../api/defind"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})

const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.RuleForm>({
  username: "",
  password: ""
})

const rules = reactive<FormRules<TS.RuleForm>>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      qsueryLogin(ruleForm).then((res) => {
        // console.log(res, "qsueryLogin")
				localStorage.setItem('token',res.data.token)
        ElMessage({
          message: "登陆成功",
          type: "success"
        })
				router.push('/')
      })
    } else {
      ElMessage.error('登陆失败')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-item {
  width: 450px;
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: -70px;
    left: 150px;
    border: 10px solid #fff;
    background-color: #eeeeee;
  }
}

.el-form {
  padding: 100px 30px;
}
</style>
