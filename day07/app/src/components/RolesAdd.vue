<template>
	<div class='rolesadd'>
		<el-dialog v-model="dialogVisible" title="添加用户" width="50%"  :before-close="close">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :size="formSize"
        status-icon
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName" />
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc" />
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="()=>emit('AddOK')"> 确定 </el-button>
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
import type { FormInstance, FormRules } from "element-plus"
import * as TS from "../api/defind"
//弹出框状态
const dialogVisible = ref(true)
//表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.RolesAdd>({
	roleName: '',
	roleDesc:''
})
//校验
const rules = reactive<FormRules<TS.RolesAdd>>({
  roleName: [
    { required: true, message: "请输入用户名称", trigger: "blur" }
  ],
  roleDesc: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
})

//接收父组件传过来的确定按钮,然后在按钮中使用方法代入
const emit = defineEmits(['AddOK','close'])

//让添加表格暴露出来,传给父组件
defineExpose({ruleForm})

const close =()=>{
	emit('close',false)
}
</script>

<style lang='scss' scoped>

</style>
