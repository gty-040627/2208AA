<template>
	<div class=''>
		<el-dialog v-model="dialogVisible" title="编辑用户" width="50%"  :before-close="closeMeit" :close-on-click-modal="false">
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
          <el-button type="primary" @click="()=>emit('GetMeitList')"> 确定 </el-button>
          <el-button @click="closeMeit">取消</el-button>
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
const ruleForm = reactive<TS.RolesMeit>({
	roleId:'',
	roleName: '',
	roleDesc:'',
	rolePermissionDesc:''
})
//校验
const rules = reactive<FormRules<TS.RolesMeit>>({
  roleName: [
    { required: true, message: "请输入用户名称", trigger: "blur" }
  ],
  roleDesc: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
})

const emit = defineEmits(['closeMeit','GetMeitList'])

const closeMeit =()=>{
	emit('closeMeit',false)
}

//接收父组件闯传过来的编辑的row
const props =defineProps(['MeitList'])
// console.log(props.MeitList);
//回填
const GetMeitList =()=>{
	ruleForm.roleName = props.MeitList.roleName
	ruleForm.roleDesc = props.MeitList.roleDesc
	ruleForm.roleId = props.MeitList.id
}
GetMeitList()

//导出编辑表单
defineExpose({ruleForm})
</script>

<style lang='scss' scoped>
.btn{
	margin-left: 550px;
}
</style>
