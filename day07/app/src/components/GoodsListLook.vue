<template>
	<div class='goodslook'>
		<el-dialog v-model="dialogVisible" title="编辑商品" width="50%"  :before-close="closeMeit" :close-on-click-modal="false">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :size="formSize"
        status-icon
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="ruleForm.goods_name" />
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input v-model="ruleForm.goods_price" />
        </el-form-item>
        <el-form-item label="商品数量" prop="goods_number">
          <el-input v-model="ruleForm.goods_number" />
        </el-form-item>
        <el-form-item label="商品重量" prop="goods_weight">
          <el-input v-model="ruleForm.goods_weight" />
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
import type { FormInstance, FormRules } from "element-plus"
import * as TS from "../api/defind"
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
//弹出框状态
const dialogVisible = ref(true)
//表单
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.GoodsListLook>({
	goods_id:'',
	goods_name:'',
	goods_price:'',
	goods_number:'',
	goods_weight
:''
})
//校验
const rules = reactive<FormRules>({
  goods_name: [
    { required: true, message: "请输入用户名称", trigger: "blur" }
  ],
  goods_price: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
  goods_number: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
  goods_weight: [
    { required: true, message: "请输入用户描述", trigger: "blur" }
  ],
})

const emit = defineEmits(['closeMeit','GetMeitList'])
//接收父组件闯传过来的编辑的row
const props =defineProps(['MeitList'])
console.log(props.MeitList);


//回填
const GetMeitList =()=>{
	ruleForm.goods_name = props.MeitList.goods_name
	ruleForm.goods_price = props.MeitList.goods_price
	ruleForm.goods_number = props.MeitList.goods_number
	ruleForm.goods_weight = props.MeitList.goods_weight
	ruleForm.goods_id = props.MeitList.goods_id
}
GetMeitList()

const closeMeit =()=>{
	emit('closeMeit',false)
}

//导出编辑表单
defineExpose({ruleForm})
</script>

<style lang='scss' scoped>
.btn{
	margin-left: 550px;
}
</style>
