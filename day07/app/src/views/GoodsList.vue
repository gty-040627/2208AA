<template>
  <div class="user-item">
    <!-- 搜索框 -->
    <div class="search">
      <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
        <template #append>
          <el-button :icon="Search" @click="GetSearch" />
        </template>
      </el-input>
      <el-button type="primary" class="addBtn" @click="OpenAdd">添加用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table border :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#" />
      <el-table-column prop="goods_name" label="商品名称" width="400px" />
      <el-table-column prop="goods_price" label="商品价格(元)" />
      <el-table-column prop="goods_weight" label="商品重量" />
      <el-table-column prop="upd_time" label="创建时间" />
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" @click="Meit(scope.row)" />
          <el-button type="danger" :icon="Delete" @click="del(scope.row.goods_id)" />
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

    <!-- 添加弹出框 -->
    <GoodsListAdd v-if="OpenStatusAdd" @close="close" ref="RolesList" @AddOK="AddOK" />
    <!-- 删除弹出框 -->
    <GoodsListDel v-if="OpenDelStatus" @DelOkk="DelOkk" @closeDel="closeDel" />
    <!-- 编辑弹出框 -->
    <GoodsListLook
      v-if="OpenMeit"
      ref="Meitlisting"
      @GetMeitList="GetMeitList"
      @closeMeit="closeMeit"
      :MeitList="MeitList"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { queryGoodsList } from "../api/api"
import * as TS from "../api/defind"
import { Delete, Edit, Search, Star } from "@element-plus/icons-vue"
import GoodsListDel from "../components/GoodsListDel.vue"
import GoodsListLook from "../components/GoodsListLook.vue"
import GoodsListAdd from "../components/GoodsListAdd.vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { queryGoodsListDel, queryGoodsListMeit, queryGoodsListSearch, queryGoodsListAdd } from "../api/api"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
//搜索框
const input3 = ref("")
//首页传参
const pageData = reactive<TS.GoodsList>({
  pagenum: 1,
  pagesize: 10,
  query: 1
})
//表格赋值
const tableData = ref()
//总数赋值
const total = ref()
//首页数据
const getGoods = () => {
  queryGoodsList({ ...pageData }).then((res) => {
    // console.log(res, "queryGoodsList")
    tableData.value = res.data.goods
    total.value = res.data.total
  })
}
getGoods()

//分页属性定义
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  // console.log(val);
  pageData.pagesize = val
  getGoods()
}
const handleCurrentChange = (val: number) => {
  // console.log(val);
  pageData.pagenum = val
  getGoods()
}

//是否打开删除弹出框
const OpenDelStatus = ref(false)
//关闭删除弹出框 子组件传过来的
const closeDel = () => {
  OpenDelStatus.value = false
}

// 打开删除弹出框
const ids = ref()
const del = (goods_id: number) => {
  ids.value = goods_id
  // console.log(goods_id,'goods_id');
  OpenDelStatus.value = true
}
// 子组件传递的确定按钮
const DelOkk = () => {
  queryGoodsListDel(ids.value).then((res) => {
    console.log(res, "queryRolesDel")
    getGoods()
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
  queryGoodsListMeit(GetList).then((res) => {
    // console.log(res,"queryGoodsListMeit")
    getGoods()
    ElMessage({
      message: "编辑成功",
      type: "success"
    })
  })
  OpenMeit.value = false
}

//搜索
const GetSearch = () => {
  pageData.query = input3.value
  queryGoodsListSearch({ ...pageData }).then((res) => {
    console.log(res, "qsueryUserListSearch")
    getGoods()
  })
}

//声明是否打开添加模态框
const OpenStatusAdd = ref(false)
// //打开添加弹出框
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
  console.log(GetAddList)
  queryGoodsListAdd(GetAddList).then((res) => {
    console.log(res, "queryRolesAdd")
    getGoods()
  })
  OpenStatusAdd.value = false
}
</script>

<style lang="scss" scoped>
.user-item {
  width: 98%;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px auto;
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
</style>
