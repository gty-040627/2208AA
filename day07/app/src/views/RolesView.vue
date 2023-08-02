<template>
  <div class="roles">
    <el-button type="primary" class="addClass" @click="OpenAdd">添加角色</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" :border="parentBorder" style="width: 100%">
      <el-table-column type="expand">
        <template #default="scope">
          <div v-if="scope.row.children.length > 0">
            <el-row
              :class="['bt_border', idx1 === 0 ? 'tp_border' : '']"
              v-for="(item1, idx1) in scope.row.children"
              :key="item1.id"
            >
              <el-col :span="6">
                <el-tag @close="delrole(scope.row, item1.id)" closable>
                  {{ item1.authName }}
                </el-tag>
              </el-col>
              <el-col :span="18">
                <!-- 二级权限 -->
                <el-row v-for="item2 in item1.children" :key="item2.id">
                  <el-col :span="6">
                    <el-tag @close="delrole(scope.row, item2.id)" closable type="success">
                      {{ item2.authName }}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      closable
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      @close="delrole(scope.row, item3.id)"
                    >
                      {{ item3.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div v-else>该角色暂无权限</div>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#" />
      <el-table-column label="角色名称" prop="roleName" />
      <el-table-column label="角色描述" prop="roleDesc" />
      <el-table-column fixed="right" label="操作" width="400px">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" @click="Meit(scope.row)">编辑</el-button>
          <el-button type="warning" :icon="Star" @click="LookTree(scope.row.id)">分配权限</el-button>
          <el-button type="danger" :icon="Delete" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加弹出框 -->
    <RolesAdd ref="RolesList" v-if="OpenStatusAdd" @AddOK="AddOK" @close="close" />
    <!-- 删除弹出框 -->
    <RolesDel v-if="OpenDelStatus" @DelOkk="DelOkk" @closeDel="closeDel" />
    <!-- 编辑弹出框 -->
    <RolesMeit
      v-if="OpenMeit"
      ref="Meitlisting"
      @closeMeit="closeMeit"
      :MeitList="MeitList"
      @GetMeitList="GetMeitList"
    />
    <!-- 分配权限弹出框 -->
    <RolesTree ref="OpenTree" @AddTree="AddTree" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, nextTick } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { DataLine, Delete, Edit, Open, Search, Star } from "@element-plus/icons-vue"
import * as TS from "../api/defind"
import { queryRoles, queryRolesAdd, queryRolesDel, queryRolesMeit, queryRightListDel } from "../api/api"
import RolesAdd from "../components/RolesAdd.vue"
import RolesDel from "../components/RolesDel.vue"
import RolesMeit from "../components/RolesMeit.vue"
import RolesTree from "../components/RolesTree.vue"
import { ElMessage } from "element-plus"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
const parentBorder = ref(false)
const childBorder = ref(false)
//表格赋值
const tableData = ref()
//首页渲染数据
const GetRoles = () => {
  queryRoles(tableData).then((res) => {
    // console.log(res, "queryRoles")
    tableData.value = res.data
  })
}
GetRoles()

//声明是否打开添加模态框
const OpenStatusAdd = ref(false)
//打开添加弹出框
const OpenAdd = () => {
  OpenStatusAdd.value = true
}
//关闭添加模态框
const close = () => {
  OpenStatusAdd.value = false
}
//先把ref穿的声明变量
const RolesList = ref()
//添加的确定按钮
const AddOK = () => {
  let GetAddList = RolesList.value.ruleForm
  if (RolesList.value.ruleForm.roleName == "" || RolesList.value.ruleForm.roleDesc == "") {
    OpenStatusAdd.value = true
  } else {
    queryRolesAdd(GetAddList).then((res) => {
      // console.log(res, "queryRolesAdd")
      GetRoles()
      OpenStatusAdd.value = false
    })
  }
}

//是否打开删除弹出框
const OpenDelStatus = ref(false)
//关闭删除弹出框 子组件传过来的
const closeDel = () => {
  OpenDelStatus.value = false
}
//打开删除弹出框
const ids = ref()
const del = (id: number) => {
  ids.value = id
  // console.log(id,'id');
  OpenDelStatus.value = true
}
//子组件传递的确定按钮
const DelOkk = () => {
  queryRolesDel(ids.value).then((res) => {
    // console.log(res, "queryRolesDel")
    GetRoles()
    ElMessage({
      message: "用户列表删除成功",
      type: "success"
    })
  })
  OpenDelStatus.value = false
}

//编辑的弹出框状态
const OpenMeit = ref(false)
//子组件传来的方法。用来关闭❌和取消按钮
const closeMeit = () => {
  OpenMeit.value = false
}
//按下编辑按钮打开模态框
const MeitList = ref()
const Meit = (row: string) => {
  console.log(row)
  MeitList.value = row
  OpenMeit.value = true
}

//声明ref的方法
const Meitlisting = ref()
//获取子组件的确认按钮
const GetMeitList = () => {
  //获取父组件传过来的编辑表单
  let GetList = Meitlisting.value.ruleForm
  console.log(GetList)
  queryRolesMeit(GetList).then((res) => {
    // console.log(res, ";queryRolesMeit")
    GetRoles()
    ElMessage({
      message: "编辑成功",
      type: "success"
    })
  })
  OpenMeit.value = false
}

//先声明ref组件的显示隐藏,用ref显示出来弹出框
let OpenTree = ref()
// nextTick(()=>{
// 	console.log(OpenTree.value.dialogVisible);
// })
//声明一个添加树状图的数据
const listAdd = reactive({
  list: []
})
//打开分配权限页面
const LookTree = (id: number) => {
  OpenTree.value.dialogVisible = true
  // console.log(id) //id
  // console.log(OpenTree.value.DataList) //接收到子组件的数组
  let tableDataTree = OpenTree.value.DataList //给数组赋值
  // let pid = tableDataTree.value.findIndex((item: any) => item.id == id)
  // tableDataTree.value[pid].children.forEach((v: any) => {
  //   v.children.forEach((v: any) => {
  //     listAdd.list.push(v.id)
  //     console.log(listAdd.list)
  //   })
  // })
}
//删除权限点

const delrole = (row: any) => {
  console.log(row, "11111111")
  console.log(row.id, "id")
  queryRightListDel(row.id).then((res) => {
    console.log(res, "queryRightListDel")
    GetRoles()
  })
  // let tableDataTree = OpenTree.value.DataList //给数组赋值
  // tableDataTree.value.splice()
}
//子组件的点击确定方法 关闭
const AddTree = () => {
  OpenTree.value.dialogVisible = false
}
</script>

<style lang="scss" scoped>
.roles {
  width: 97%;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px auto;
  .addClass {
    margin: 20px;
  }
}

.bt_border {
  margin-left: 50px;
}
</style>
