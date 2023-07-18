<template>
  <div class="OrderList">
    <!-- 搜索 -->
    <div class="search">
      <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>

    <!-- 表格 -->
    <el-table border :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#" />
      <el-table-column prop="order_number" label="订单编号" width="200px" />
      <el-table-column prop="order_price" label="订单价格" />
      <el-table-column prop="pay_status" label="是否付款">
        <template #default="scope">
          <p v-if="scope.row.pay_status == 0" class="redMoney">未付款</p>
          <p v-else class="GreenMoney">已付款</p>
        </template>
      </el-table-column>
      <el-table-column prop="is_send" label="是否发货" />
      <el-table-column prop="create_time" label="下单时间">
        <template #default="scope">
          <p>{{ GetTime(scope.row.create_time) }}</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200px">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" />
          <el-button type="success" :icon="Location" @click="kuaidi"/>
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

		<!-- 物流信息子组件 -->
		<OrdersKuaidi v-if="OpenWuliu" @closeDel="closeDel"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { Search, Edit, Location } from "@element-plus/icons-vue"
import * as TS from "../api/defind"
import { queryOrders } from "../api/api"
import OrdersKuaidi from "../components/OrdersKuaidi.vue"
import moment from "moment"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
//处理时间

const GetTime = (e: any) => {
  return moment(parseInt(e)).format("YYYY-MM-DD HH:mm:ss")
}

//搜索框
const input3 = ref("")
//表格参数
const pageData = reactive<TS.OrderList>({
  pagenum: 1,
  pagesize: 10,
  query: ""
})
const tableData = ref()
const total = ref()
const GetOrdersList = () => {
  queryOrders(pageData).then((res) => {
    // console.log(res, "queryOrders")
    tableData.value = res.data.goods
    total.value = res.data.total
  })
}
GetOrdersList()

//分页属性定义
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  // console.log(val);
  pageData.pagesize = val
  GetOrdersList()
}
const handleCurrentChange = (val: number) => {
  // console.log(val);
  pageData.pagenum = val
  GetOrdersList()
}


//物流信息
const OpenWuliu = ref(false)
const kuaidi = ()=>{
	OpenWuliu.value = true
}
const closeDel=()=>{
	OpenWuliu.value = false
}

</script>

<style lang="scss" scoped>
.OrderList {
  width: 98%;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px auto;
  .search {
    padding: 15px;
    .input-with-select {
      width: 350px;
      height: 42px;
    }
  }
}


.redMoney{
	width: 60px;
	height: 35px;
	border: 1px solid #fcd5d5;
	background-color: #fef0f0;
	color: #f56c6c;
	text-align: center;
	line-height: 35px;
	border-radius: 5px;
}
.GreenMoney{
	width: 60px;
	height: 35px;
	border: 1px solid greenyellow;
	background-color: rgba(172, 255, 47, 0.46);
	color: rgba(0, 128, 0, 0.547);
	text-align: center;
	line-height: 35px;
	border-radius: 5px;
}
</style>
