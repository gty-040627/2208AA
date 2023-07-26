<template>
  <div class="list">
    <van-nav-bar title="问诊记录" left-arrow @click-left="onClickLeft" />
    <van-tabs sticky v-model:active="active">
      <van-tab title="极速问诊">
        <ListChildren />
      </van-tab>
      <van-tab title="找医生"><p class="over">没有更多了</p> </van-tab>
      <van-tab title="开药问诊"> <p class="over">没有更多了</p></van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ListChildren from "../components/ListChildren.vue"
const router = useRouter()
const route = useRoute()

//返回
const onClickLeft = () => {
  router.push('/fast')
}
// active 的值是 tab 的索引
const active = ref(0)

</script>

<style lang="scss" scoped>
.van-tabs {
  width: 100%;
  
}

.over{
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #a59999;
}
</style>
