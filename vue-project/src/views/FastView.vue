<template>
  <div class="fast">
    <van-nav-bar
      title="极速问诊"
      right-text="问诊记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="Bigimg"><img src="../../public/big.png" alt=""></div>
    <div class="title"><p><span>20s </span>快速匹配专业医生</p></div>
    <div class="text" @click="gotoAllDep">
      <div><img src="../../public/icon_14dhfnxbzsfd/jishiben.png" alt=""></div>
      <div>
        <p>三甲图文问诊<br><span>三甲主治及以上级别医生</span></p>
      </div>
      <div class="dayu">
        >
      </div>
    </div>
    <div class="text" @click="gotoAllDep">
      <div><img src="../../public/icon_14dhfnxbzsfd/wuyefengcai.png" alt=""></div>
      <div>
        <p>普通图文问诊<br><span>二甲主治及以上级别医生</span></p>
      </div>
      <div class="dayu">
        >
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const data = reactive({})
//返回
const onClickLeft =()=>{
    router.push('/home/about')
}
//激素问诊
const onClickRight=()=>{
  router.push('/list')
}
//跳转选择科室页面
const gotoAllDep=()=>{
  router.push('/alldep')
}
</script>

<style lang="scss" scoped>
.Bigimg{
    width: 90%;
   img{
    width: 70%;
    height: 210px;
    padding:20px 70px;
   }
}
.title{
  width: 100%;
  text-align: center;
  span{
    color: #83caad;
  }
}

.text{
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  border: 1px solid #cccccc7e;
  border-radius: 5px;
  img{
    width: 50px;
    height: 50px;
  }
 span{
  font-size: 14px;
  color: #908989;
 }
 .dayu{
  color: #ccc;
 }
}
</style>
