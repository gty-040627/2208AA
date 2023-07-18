<template>
  <div class="categories">
    <div class="origin">
      <img src="../../public/gantan.png" alt="" />
      <span>注意：只允许为第三级分类设置相关参数！</span>
    </div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="选择商品分类">
        <el-select v-model="form.cat_name" placeholder="请选择">
          <el-option v-for="item in form"  :value="item.cat_name"> </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="动态参数" name="first">
        <el-button type="primary" disabled>添加参数</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="#" width="100" />
          <el-table-column prop="name" label="参数名称" width="300" />
          <el-table-column prop="address" label="操作" />
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="静态属性" name="second">
        <el-button type="primary" disabled>添加属性</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="#" width="180" />
          <el-table-column prop="name" label="属性名称" width="180" />
          <el-table-column prop="address" label="操作" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { queryCategories } from "../api/api"
import * as TS from "../api/defind"
import type { TabsPaneContext } from "element-plus"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})

const form = ref<TS.CategoriesList>({
  cat_name: "",
	cat_id:''
})
//渲染
const GetCategories = () => {
  queryCategories().then((res) => {
    console.log(res, "queryCategories")
    form.value = res.data
    console.log(form)
  })
}
GetCategories()

const activeName = ref("first")

const tableData = [{}]
</script>

<style lang="scss" scoped>
.categories {
  width: 97%;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px auto;
  padding: 20px 30px;
  .origin {
    width: 97%;
    height: 50px;
    border-radius: 5px;
    background-color: #fdf6ec;
    color: #e6a23c;
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      margin: 10px;
    }
  }
}

.el-form {
  margin-top: 20px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-table{
	margin-top: 10px;
}
</style>
