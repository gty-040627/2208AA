<template>
  <div class="userlook">
    <el-dialog v-model="dialogVisible" title="分配角色" width="50%" :before-close="closeLook" :close-on-click-modal="false">
      <p>当前的用户：{{ users }}</p>
      <p>当前的角色：{{ roleName }}</p>
      <el-form :model="form" label-width="120px">
        <el-form-item label="分配新角色">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
//
const form = ref({
	region:''
})
//声明用户
const users = ref()
//声明角色
const roleName = ref()
//设置弹出框状态
const dialogVisible = ref(true)

const props = defineProps(['LookList',])
console.log(props.LookList);

const LookUserList =()=>{
	users.value = props.LookList.username
	roleName.value = props.LookList.role_name
}
LookUserList()

const emit = defineEmits(['closeLook'])
const closeLook =()=>{
	emit('closeLook')
}



</script>

<style lang="scss" scoped>
p{
	padding: 10px 35px;
}
</style>
