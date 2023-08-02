<template>
  <div class="tree">
    <el-dialog v-model="dialogVisible" title="分配权限" width="50%" :close-on-click-modal="false">
      <el-tree :data="DataList" :props="defaultProps" show-checkbox default-expand-all node-key="id"  :default-checked-keys="DataList.id">
        <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ data.authName }}</span>
        </span>
      </template>
      </el-tree>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="() => emit('AddTree')"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { queryRolesTree } from "../api/api"
import * as TS from "../api/defind"
//打开状态
const dialogVisible = ref(false)
//渲染树状图的数据
const DataList = ref<TS.TreeList>({
	id: '',
	rid: ''
})
const defaultProps = {
  children: "children",
  label: "label",
  disabled: "disabled"
}
//树状图的接口渲染
queryRolesTree().then((res)=>{
		// console.log(res,'queryRolesTree55555');
		DataList.value = res.data
	})
const data = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 3,
        label: "Level two 2-1",
        children: [
          {
            id: 4,
            label: "Level three 3-1-1"
          },
          {
            id: 5,
            label: "Level three 3-1-2",
            disabled: true
          }
        ]
      }
    ]
  }
]


//接收父组件写的方法
const emit = defineEmits(['AddTree'])

//子组件导出，父组件接收状态
defineExpose({ dialogVisible, DataList })
</script>

<style lang="scss" scoped></style>
