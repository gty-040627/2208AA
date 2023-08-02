<template>
  <div class="all">
    <van-nav-bar title="选择科室" left-arrow @click-left="onClickLeft" />
    <div class="dep-list">
      <van-sidebar v-model="active">
        <van-sidebar-item :title="item.name" v-for="item in AllList" :key="item.id" />
      </van-sidebar>
      <div>
        <div v-for="item in subDep" :key="item.id" class="dep-right" @click="togoillness(item.id)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryAllDel } from '../utils/api'
import * as TS from '../utils/defind'
const router = useRouter()
const route = useRoute()
const data = reactive({})
//返回
const onClickLeft = () => {
  router.push('/fast')
}
//侧边栏下标
const active = ref(1)
//接收接口
const AllList = ref()
const GetAll = () => {
  QueryAllDel().then((res) => {
    // console.log(res, 'QueryAllDel')
    AllList.value = res.data.data
  })
}
GetAll()

//科室的child
const subDep = computed(() => AllList.value[active.value]?.child)

//跳入图文问诊页面
const togoillness = (id: any) => {
  // console.log(id);
  router.push({ path: '/illness', query: { id } })
}
</script>

<style lang="scss" scoped>
.van-sidebar {
  width: 114px;
  height: calc(100vh - 50px);
  &-item {
    padding: 14px;
    color: var(--cp-tag);
    &--select {
      color: var(--cp-main);
      font-weight: normal;
      &::before {
        display: none;
      }
    }
  }
}

  .dep-list {
    display: flex;
    justify-content: start;
  }

  .dep-right {
    flex: 1;
    height: 30px;
    margin-top: 20px;
    padding-left: 20px;
    font-size: 14px;
    color: #777070;
  }

.van-nav-bar{
  width: 100vw;
  position: fixed;
}
</style>
