<template>
  <div class="foods">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <div v-for="(item, index) in list" :key="index" class="data">
      <div class="data-top">
        <div><img :src="item.creatorAvatar" alt="" /></div>
        <div>
          <p>{{ item.creatorName }}</p>
          <span class="title">{{ item.creatorHospatalName }} {{ item.creatorDep }}</span>
        </div>
        <div>
          <span v-if="status" class="flag" @click="change">+ 关注</span>
          <span v-else class="flag" @click="change">已关注</span>
        </div>
      </div>
      <div>
        <p class="name">{{ item.title }}</p>
        <span class="title2" v-html="item.content" ></span>
        <div class="images">
          <div v-for="it in item.coverUrl">
            <img :src="it" alt="" class="imging" />
          </div>
        </div>
        <p class="love">
          {{ item.collectionNumber }}收藏 &nbsp;&nbsp; {{ item.commentNumber }}评论
        </p>
      </div>
    </div>
  </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryFood } from '../utils/api'
import * as TS from "../utils/defind"
const router = useRouter()
const route = useRoute()
const data = ref<TS.foods>({
  type: 'food',
  current: 1,
  pageSize: 5
})

//饮食接口
const list = ref()
const GetFoods = () => {
  QueryFood(data.value).then((res) => {
    // console.log(res, 'QueryFood')
    list.value = res.data.data.rows
  })
}
GetFoods()
//关注状态
const status =ref(true)
const change=()=>{
    status.value = !status.value
}


//下拉刷新
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  // 加载更多
  const res = await QueryFood(data.value)
  list.value.push(...res.data.data.rows)
  if (data.value.current >= res.data.pageTotal) {
    finished.value = true
  } else {
    data.value.current++
  }
  loading.value = false
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.foods {
  width: 95%;
  margin: auto;
}
.van-tabs {
  width: 100%;
  background-color: #fff;
  padding: 20px !important;
}
.name {
  padding: 5px 10px;
}

.data {
  width: 100%;
  background-color: #fff;
}
.data-top {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
  .title {
    width: 200px;
    font-size: 14px;
    color: #7d7c7c;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .flag {
    display: inline-block;
    width: 75px;
    height: 30px;
    border-radius: 20px;
    color: #4fd1ba;
    border: 1px solid #4fd1ba;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
  }
}
.images {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.imging {
  width: 90%;
  height: 100px;
  border-radius: 10px;
  margin: 5px;
}
.title2 {
  font-size: 14px;
  color: #7d7979;
  // padding-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
::v-deep .title2 img{
   display: none;
}
.love {
  height: 70px;
  font-size: 12px;
  padding: 10px;
  color: #aaa5a5;
}
</style>
