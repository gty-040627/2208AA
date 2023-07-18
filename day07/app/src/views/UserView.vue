<template>
  <div class="user">
    <!-- 页面布局 -->
    <div class="user-item">
      <!-- 搜索 -->
      <div class="search">
        <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
          <template #append>
            <el-button :icon="Search" @click="GetSearch" />
          </template>
        </el-input>
        <el-button type="primary" class="addBtn" @click="AddComponent">添加用户</el-button>
      </div>
      <!-- 表格 -->
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="index" label="#" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="mobile" label="电话" />
        <el-table-column prop="role_name" label="角色" />
        <el-table-column prop="mg_state" label="状态">
          <template #default="scope">
            <el-switch v-model="scope.row.mg_state" @click="changeStatus"></el-switch>
          </template> </el-table-column
        >

        <el-table-column fixed="right" label="操作" width="300px">
          <template #default="scope">
            <el-button type="primary" :icon="Edit" @click="Meit(scope.row)" />
            <el-button type="warning" :icon="Star" @click="Look(scope.row)" />
            <el-button type="danger" :icon="Delete" @click="del(scope.row.id)" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        :page-sizes="[1, 2, 5, 10]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <!-- 添加弹出框 -->
    <UserAdd v-if="OpenComponent" ref="OpenAdd" @OKK="OKK" @closeAdd="closeAdd"/>
    <!-- 修改模态框 -->
    <UserMeit v-if="OpenMeit" ref="OpenMeit" @MeitOKK="MeitOKK" :rowList="rowList" @closeMeit="closeMeit"/>
    <!-- 删除弹出框 -->
    <UserDel v-if="OpenDel" ref="OpenDelList" @delOkk="delOkk" :id="ids" @closeDel="closeDel"/>
    <!-- 分配角色弹出框 -->
    <UserLook v-if="OpenLook" :LookList="LookList" @closeLook="closeLook"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { Delete, Edit, Open, Search, Star } from "@element-plus/icons-vue"
import * as TS from "../api/defind"
import { ElMessage, ElMessageBox } from "element-plus"
import {
  qsueryUserList,
  qsueryUserListAdd,
  qsueryUserListSearch,
  qsueryUserListLookList,
  qsueryUserListDel
} from "../api/api"
import UserAdd from "../components/UserAdd.vue"
import UserMeit from "../components/UserMeit.vue"
import UserDel from "../components/UserDel.vue"
import UserLook from "../components/UserLook.vue"
//分页
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

//搜索框
const input3 = ref("")
//改变状态
const changeStatus = () => {
  ElMessage({
    message: "更新用户状态成功",
    type: "success"
  })
}
//表格参数
const pageData = reactive<TS.GetUser>({
  pagenum: 1,
  pagesize: 10,
  query: ""
})

//表格赋值
const tableData = ref()
const total = ref()
//表格数据接口
const GetList = () => {
  qsueryUserList({ ...pageData }).then((res) => {
    // console.log(res, "qsueryUserList")
    tableData.value = res.data.users
    total.value = res.data.total
  })
}
GetList()
//分页
const handleSizeChange = (val: number) => {
  // console.log(val);
  pageData.pagesize = val
  GetList()
}
const handleCurrentChange = (val: number) => {
  // console.log(val);
  pageData.pagenum = val
  GetList()
}

//搜索按钮
const GetSearch = () => {
  pageData.query = input3.value
  qsueryUserListSearch({ pageData }).then((res) => {
    // console.log(res, "qsueryUserListSearch")
    GetList()
  })
}

//添加模态框显示状态
const OpenComponent = ref(false)
const closeAdd =()=>{
	OpenComponent.value = false
}
//点击添加按钮打开弹出框
const AddComponent = () => {
  OpenComponent.value = true
}
//通过ref接收子组件的内容
const OpenAdd = ref()
//传递给子组件的确定点击按钮
const OKK = () => {
  //把子组件的表单传入子组件 定义
  let GetAddList = OpenAdd.value.ruleForm
  //添加接口
  qsueryUserListAdd(GetAddList).then((res) => {
    // console.log(res, "qsueryUserList")
    GetList()
  })
  OpenComponent.value = false
}

//修改模态框显示状态
const OpenMeit = ref(false)
const closeMeit =()=>{
	OpenMeit.value = false
}
//定义按钮 获取row的id
const rowList = ref()
//点击编辑按钮打开弹出框
const Meit = (row: any) => {
	console.log(111111);
  console.log(row,'row')
  rowList.value = row
  OpenMeit.value = true
}
//传递给子组件的确定点击事件
const MeitOKK = () => {
  let GetMeitList = OpenMeit.value.ruleForm
  console.log(GetMeitList)
  qsueryUserListLookList(GetMeitList).then((res) => {
    console.log(res, "qsueryUserListLookList")
    GetList()
  })
  OpenMeit.value = false
}

//点击打开删除弹出框
const OpenDel = ref(false)
const closeDel =()=>{
	OpenDel.value= false
}
//传递给子组件
const ids = ref(0)
const del = (id: number) => {
  // console.log(id, "id")
  ids.value = id
  OpenDel.value = true
}
//子组件的确定按钮
const delOkk = () => {
  OpenDel.value = false
  qsueryUserListDel(ids.value).then((res) => {
    // console.log(res, "qsueryUserListDel")
    GetList()
		ElMessage({
      message: "删除用户成功",
      type: "success"
    })
  })
}

//控制分配角色弹出框
const OpenLook = ref(false)
const closeLook =()=>{
	OpenLook.value = false
}
//声明一个传给子组件的回填内容
const LookList = ref()
const Look = (row: any) => {
  console.log(row)
  LookList.value = row
  OpenLook.value = true
}
</script>

<style lang="scss" scoped>
.user {
  .user-item {
    width: 98%;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px auto;
    .el-pagination {
      margin: 20px;
    }
    .search {
      padding: 15px;
      .input-with-select {
        width: 350px;
        height: 42px;
      }
      .addBtn {
        height: 42px;
        margin-left: 20px;
      }
    }
  }
}
</style>
