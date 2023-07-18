<template>
  <div class="CategoriesList">
    <el-button type="primary">添加分类</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" :border="parentBorder" style="width: 100%">
      <el-table-column type="expand">
        <template #default="scope">
          <el-table :data="tableData.children" style="width: 100%">
            <el-table-column type="index" label="" />
            <el-table-column prop="cat_name" />
            <el-table-column prop="cat_deleted">
              <template #default="scope">
                <p v-if="scope.row.cat_deleted == false" class="deleted">√</p>
                <p v-else class="deleted-cha">×</p>
              </template>
            </el-table-column>
            <el-table-column prop="cat_level">
              <template #default="scope">
                <p v-if="scope.row.cat_level == 0" class="levelOne">一级</p>
                <p v-else>二级</p>
              </template>
            </el-table-column>
            <el-table-column fixed="right" width="250px">
              <template #default="scope">
                <el-button type="primary" :icon="Edit">编辑</el-button>
                <el-button type="danger" :icon="Delete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#" />
      <el-table-column label="分类名称" prop="cat_name" />
      <el-table-column label="是否有效" prop="cat_deleted">
        <template #default="scope">
          <p v-if="scope.row.cat_deleted == false" class="deleted">√</p>
          <p v-else class="deleted-cha">×</p>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="cat_level">
        <template #default="scope">
          <p v-if="scope.row.cat_level == 0" class="levelOne">一级</p>
          <p v-else>二级</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250px">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" @click="Meit(scope.row)">编辑</el-button>
          <el-button type="danger" :icon="Delete" @click="Del(scope.row.cat_id)">删除</el-button>
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

    <!-- 编辑弹出框 -->
    <CategoriesListMeit v-if="Open" :ListMeit="ListMeit" ref="LookList" @MeitOKK="MeitOKK" @closeMeit="closeMeit" />
    <!-- 删除弹出框 -->
    <CategoriesListDel v-if="OpenDel" @closeDel="closeDel" @DelOkk="DelOkk" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { Delete, Edit, Star } from "@element-plus/icons-vue"
import { queryCategoriesList, queryCategoriesMeit, queryCategoriesDel } from "../api/api"
import * as TS from "../api/defind"
import { ElMessage, ElMessageBox } from "element-plus"
import CategoriesListMeit from "../components/CategoriesListMeit.vue"
import CategoriesListDel from "../components/CategoriesListDel.vue"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
const parentBorder = ref(false)

const page = reactive<TS.CategoriesList2>({
  type: 3,
  pagenum: 1,
  pagesize: 5
})

//表格赋值
const tableData = ref()
//分页
const total = ref()
//接口请求
const GetList = () => {
  queryCategoriesList(page).then((res) => {
    // console.log(res, "queryCategoriesList")
    tableData.value = res.data.result
    total.value = res.data.total
  })
}
GetList()

//分页
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

//分页
const handleSizeChange = (val: number) => {
  // console.log(val);
  page.pagesize = val
  GetList()
}
const handleCurrentChange = (val: number) => {
  // console.log(val);
  page.pagenum = val
  GetList()
}

//修改模态框显示状态
const Open = ref(false)
//关闭方法
const closeMeit = () => {
  Open.value = false
}
//声明一个把row传递过去给子组件
const ListMeit = ref()
//声明ref
const LookList = ref()
//打开修改弹出框
const Meit = (row: TS.CategoriesListMeit) => {
  // console.log(row);
  ListMeit.value = row
  Open.value = true
}
//把方法传给子组件的确定
const MeitOKK = () => {
  let MeitList = LookList.value.ruleForm
  console.log(MeitList)
  queryCategoriesMeit(MeitList).then((res) => {
    console.log(res, "queryCategoriesMeit")
    GetList()
		ElMessage({
      message: "商品分类编辑成功",
      type: "success"
    })
  })
  Open.value = false
}

//状态
const OpenDel = ref()
//关闭按钮传给子组件
const closeDel = () => {
  OpenDel.value = false
}
const id = ref()
//打开删除模态框
const Del = (cat_id: TS.CategoriesListMeit) => {
  OpenDel.value = true
  // console.log(cat_id,'cat_id');
  id.value = cat_id
}
//确定按钮
const DelOkk = () => {
  queryCategoriesDel(id.value).then((res) => {
    console.log(res, "queryCategoriesDel")
    GetList()
		ElMessage({
      message: "商品分类删除成功",
      type: "success"
    })
    OpenDel.value = false
  })
}
</script>

<style lang="scss" scoped>
.CategoriesList {
  width: 97%;
  background-color: #fff;
  margin: 20px auto;
  border-radius: 5px;
  padding: 20px;
}

.deleted {
  width: 15px;
  height: 15px;
  background-color: #90ee90;
  color: #fff;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
}
.deleted-cha {
  width: 15px;
  height: 15px;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
}

.levelOne {
  width: 45px;
  height: 25px;
  background-color: #ecf5ff;
  color: #66c3ff;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
}
</style>
