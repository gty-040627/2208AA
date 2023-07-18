<template>
  <div class="rightList">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" />
      <el-table-column prop="authName" label="权限名称"  />
      <el-table-column prop="path" label="路径"  />
      <el-table-column label="权限等级" >
				<template  #default="scope">
					<p v-if="scope.row.level == 0" class="one">一级</p>
					<p v-if="scope.row.level == 1" class="two">二级</p>
					<p v-if="scope.row.level == 2" class="tree">三级</p>
				</template>
			</el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { queryRightList } from "../api/api"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})

const tableData = ref()

//接收数据
const List = () => {
  queryRightList().then((res) => {
    // console.log(res, "queryRightList")
		tableData.value = res.data
  })
}
List()
</script>

<style lang="scss" scoped>
.el-table{
	margin: 20px;
}
.one{
	width: 55px;
	height: 35px;
	border: 2px solid #dcedff;
	background-color: #ecf5ff;
	color: #409eff;
	text-align: center;
	line-height: 35px;
	border-radius: 5px;
}
.two{
	width: 55px;
	height: 35px;
	border: 2px solid #d6ecca;
	background-color: #ecf5e7;
	color: #95cc8b;
	text-align: center;
	line-height: 35px;
	border-radius: 5px;
}
.tree{
	width: 55px;
	height: 35px;
	border: 2px solid #f8e8cf;
	background-color: #fcf6eb;
	color: #e9ae56;
	text-align: center;
	line-height: 35px;
	border-radius: 5px;
}
</style>
