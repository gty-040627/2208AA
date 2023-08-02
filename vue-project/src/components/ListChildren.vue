<template>
  <div class="ListChildren">
    <div class="top"></div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="item in list" :key="item.id" class="list">
        <!-- 上 -->
        <div class="top-list">
          <div class="tt">
            <img src="../../public/avatar-doctor.svg" alt="" /><span>{{ item.docInfo.name }}</span>
          </div>
          <div>
            <span class="text2" v-if="item.statusValue == '待支付'">待支付</span>
            <span class="text" v-if="item.statusValue == '已取消'">已取消</span>
            <span class="text3" v-if="item.statusValue == '咨询中'">咨询中</span>
          </div>
        </div>
        <!-- 中 -->
        <div class="process1">
          病情描述 &nbsp;<span>{{ item.illnessDesc }}</span>
        </div>
        <div class="process">
          价格 <span>￥{{ item.payment }}</span>
        </div>
        <div class="process">创建时间 {{ item.createTime }}</div>
        <div class="btn">
          <div v-if="item.status == '1'">
            <span class="two" @click="gotoDetail(item)">去支付</span>
            <span class="one" @click="order(item)">取消问诊</span>
          </div>
          <div v-if="item.status == '2'">
            <span class="two" @click="Ondetail(item.id)">继续沟通</span>
            <span class="one" @click="order(item)">取消问诊</span>
          </div>
          <div v-if="item.status == '3'">
            <span class="two" @click="Ondetail(item.id)">继续沟通</span>
            <span class="one" @click="look(item.id)">查看处方</span>
          </div>
          <div v-if="item.status == '4'">
            <span class="one">问诊记录</span>
            <span class="one">去评价</span>
          </div>
          <div v-if="item.status == '5'">
            <span class="two" @click="gotoAbout">咨询其他医生</span>
            <span class="one" @click="listdel(item.id)">删除订单</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryList, QueryListDel, QueryListOrder } from '../utils/api'
import * as TS from '../utils/defind'
import { showSuccessToast } from 'vant';
const router = useRouter()
const route = useRoute()
const data = ref<TS.list>({
  type: 2,
  current: 1,
  pageSize: 10
})
//极速问诊
const list = ref()
const GetList = () => {
  QueryList(data.value).then((res) => {
    // console.log(res, 'QueryList')
    list.value = res.data.data.rows
  })
}
GetList()

//下拉刷新
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  // 加载更多
  const res = await QueryList(data.value)
  list.value.push(...res.data.data.rows)
  if (data.value.current >= res.data.pageTotal) {
    finished.value = true
  } else {
    data.value.current++
  }
  loading.value = false
}

//删除订单
const listdel = (id: TS.listDel) => {
  console.log(id)
  QueryListDel(id).then((res) => {
    // console.log(res, 'QueryListDel')
    GetList()
    showSuccessToast('删除成功');
  })
}

//查询订单详情
//查看处方
const look = (id: any) => {
  console.log(id)
  router.push({ path: 'LookUrl', query: { id } })
}

//取消问诊
const order = (item: any) => {
  console.log(item, 'item')
  console.log(item.status, 'status')
  console.log(item.id, 'id')
  let id = item.id
  QueryListOrder(id).then((res) => {
    // console.log(res, 'QueryListOrder')
    item.status == '5'
    GetList()
    showSuccessToast('已取消问诊');
  })
}
//咨询其他医生
const gotoAbout = () => {
  router.push('/home/about')
}

//继续沟通
const Ondetail = (id: number) => {
  // console.log(111111);
  console.log(id, 'id')
  router.push({ path: '/room', query: { id } })
}

//去支付
const gotoDetail = (item: any) => {
  console.log(item.id, 'item.id')
  let ids = item.id
  // let items = JSON.stringify(item)
  router.push({ path: '/detail', query: { ids } })
  // router.push({path:'/detail',query:{id}})
}
</script>

<style lang="scss" scoped>
.ListChildren {
  width: 100vw;
  height: 100vh;
  background-color: #cccccc2f;
}
.top {
  width: 100%;
  height: 5px;
}
.list {
  width: 92%;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px auto;
}
.top-list {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc3c;
  img {
    width: 30px;
    height: 30px;
    margin: 20px;
  }
}
.text2 {
  color: orange;
  padding-right: 20px;
  font-size: 14px;
}
.text3 {
  color: #69e6cf;
  padding-right: 20px;
  font-size: 14px;
}
.tt {
  display: flex;
  align-items: center;
}
.text {
  padding-right: 20px;
  font-size: 14px;
  color: #847f7f;
}
.process {
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #9c9999c0;
  padding-left: 20px;
  margin: 7px auto;
  span {
    color: #000;
  }
}

.process1 {
  padding-top: 30px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #9c9999c0;
  padding-left: 20px;
  margin: 7px auto;
  span {
    color: #000;
  }
}

.btn {
  width: 100%;
  height: 70px;
  line-height: 70px;
  font-size: 14px;
  span {
    margin: 5px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    text-align: center;
    float: right;
  }
  .one {
    border: 1px solid #cccccc62;
    font-size: 12px;
    color: #766f6f;
    background-color: #cccccc4e;
  }
  .two {
    border: 1px solid #9be4d7;
    color: #55b1a0;
    font-size: 12px;
  }
}
</style>
