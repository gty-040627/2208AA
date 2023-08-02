<template>
  <div class="CategoriesListMeit">
    <el-dialog v-model="dialogVisible" title="编辑分类" width="50%" :before-close="closeMeit" :close-on-click-modal="false">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :size="formSize" status-icon>
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name" />
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
const store = useStore()
const router = useRouter()
const route = useRoute()
import type { FormInstance, FormRules } from "element-plus"
import * as TS from "../api/defind"
const data = reactive({})
//弹出框状态
const dialogVisible = ref(true)
//表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive<TS.CategoriesListMeit>({
	cat_deleted:false,
	cat_id:'',
	cat_level:0,
	cat_name:'',
	cat_pid:''
})
//校验
const rules = reactive<FormRules<TS.RolesAdd>>({
  cat_name: [
    { required: true, message: "请输入分类名称", trigger: "blur" }
  ],
})
//接收父组件传过来的row
const props = defineProps(['ListMeit'])
// console.log(props.ListMeit);
//回填
const look = ()=>{
	ruleForm = props.ListMeit
}
look()
//导出来
defineExpose({ruleForm})

const emit = defineEmits(['MeitOKK','closeMeit'])
const closeMeit = () => {
  emit("closeMeit")
}


</script>

<style lang="scss" scoped>
.btn{
	margin-left: 550px;
}
</style>
