<template>
  <div class="">
    <el-dialog v-model="dialogVisible" title="编辑用户" width="50%" :before-close="closeMeit" :close-on-click-modal="false">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :size="formSize" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" disabled />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="ruleForm.mobile" />
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="() => emit('MeitOKK')"> 确定 </el-button>
          <el-button @click="closeMeit">取消</el-button>
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
const emit = defineEmits(["MeitOKK", "closeMeit"])

const closeMeit = () => {
  emit("closeMeit")
}
//表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()

//校验
const rules = reactive<FormRules<TS.MeitForm>>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
  mobile: [{ required: true, message: "请输入电话", trigger: "blur" }]
})
let ruleForm = reactive({
  id: "",
  rid: "",
  mobile: "",
  email: "",
  username: ""
})

//接受父组件的传过来的row的内容
const props = defineProps(["rowList"])
// console.log(props.rowList);

//回填
const LookList = () => {
  ruleForm = props.rowList
}
LookList()

//把表单传给父组件
defineExpose({ ruleForm })
</script>

<style lang="scss" scoped>
.btn{
	margin-left: 550px;
}
</style>
