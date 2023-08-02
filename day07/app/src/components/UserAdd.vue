<template>
  <div class="">
    <el-dialog v-model="dialogVisible" :title="props.title" width="50%" :before-close="closeAdd" :close-on-click-modal="false">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :size="formSize"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="ruleForm.mobile" />
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="()=>emit('OKK')"> 确定 </el-button>
          <el-button @click="closeAdd">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import * as TS from "../api/defind"
//弹出框状态
const dialogVisible = ref(true)
//接收父组件定义的方法
const emit = defineEmits(["OKK",'closeAdd'])
const closeAdd =()=>{
	emit('closeAdd')
}
//表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.AddForm>({
	username: '',
	password:'',
	email:'',
	mobile:''
})
//导出子组件的内容。让父组件接收
defineExpose({ruleForm})
//校验
const rules = reactive<FormRules<TS.AddForm>>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" }
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" }
  ],
  mobile: [
    { required: true, message: "请输入电话", trigger: "blur" }
  ],
})

const props =    defineProps(['title'])


</script>

<style lang="scss" scoped>
.btn{
	margin-left: 530px;
}
</style>
