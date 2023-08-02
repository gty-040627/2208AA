<template>
  <div class="">
    <el-dialog v-model="dialogVisible" title="添加商品" width="50%" :before-close="close" :close-on-click-modal="false">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :size="formSize" status-icon
        >
        <el-form-item label="角色名称" prop="goods_name">
          <el-input v-model="ruleForm.goods_name" />
        </el-form-item>
        <el-form-item label="角色价格" prop="goods_number">
          <el-input v-model="ruleForm.goods_number" />
        </el-form-item>
        <el-form-item label="角色数量" prop="goods_price">
          <el-input v-model="ruleForm.goods_price" />
        </el-form-item>
        <el-form-item label="角色重量" prop="goods_weight">
          <el-input v-model="ruleForm.goods_weight" />
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="() => emit('AddOK')"> 确定 </el-button>
          <el-button @click="close">取消</el-button>
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
const data = reactive({})
import type { FormInstance, FormRules } from "element-plus"
import * as TS from "../api/defind"
//弹出框状态
const dialogVisible = ref(true)
// //表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.GoodsListAdd>({
	goods_name: '',
	goods_number:'',
	goods_price:'',
	goods_weight:'',
	pics:''
})
//校验
const rules = reactive<FormRules<TS.GoodsListAdd>>({
  goods_name: [
    { required: true, message: "请输入用户名称", trigger: "blur" }
  ],
  goods_number: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
  goods_price: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
  goods_weight: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ]
})

//接收父组件传过来的确定按钮,然后在按钮中使用方法代入
const emit = defineEmits(['AddOK','close'])

// //让添加表格暴露出来,传给父组件
defineExpose({ruleForm})

const close =()=>{
	emit('close',false)
}
</script>

<style lang="scss" scoped>
.btn{
	margin-left: 550px;
}
</style>
