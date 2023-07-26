<template>
  <div class="ListChildren">
    <div class="top"></div>
    <div v-for="item in list" :key="item.id" class="list">
      <!-- 上 -->
      <div class="top-list">
        <div class="tt">
          <img src="../../public/avatar-doctor.svg" alt="" /><span>{{ item.docInfo.name }}</span>
        </div>
        <div>
          <span class="text">{{ item.statusValue }}</span>
        </div>
      </div>
      <!-- 中 -->
      <div class="process">
        病情描述<span>{{ item.cancelProcess }}</span>
      </div>
      <div class="process">
        价格 <span>￥{{ item.payment }}</span>
      </div>
      <div class="process">创建时间 {{ item.createTime }}</div>
      <div class="btn">
       
        <span class="two" v-if="item.statusValue== '咨询中'">继续沟通</span>
        <span class="two" v-if="item.statusValue== '待接诊'">咨询其他医生</span>
        <span class="one" v-if="item.statusValue== '咨询中'">查看处方</span>
        <span class="one" v-if="item.statusValue== '待接诊'">取消问诊</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryList } from '../utils/api'
import * as TS from '../utils/defind'
const router = useRouter()
const route = useRoute()
const data = reactive<TS.list>({
  type: 2,
  current: 1,
  pageSize: 18
})
//极速问诊
const list = ref()
const GetList = () => {
  QueryList(data).then((res) => {
    console.log(res, 'QueryList')
    list.value = res.data.data.rows
  })
}
GetList()
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
  color: #9c9999;
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
    border: 1px solid #ccc;
  }
  .two {
    border: 1px solid #9be4d7;
    color: #55b1a0;
  }
}
</style>
