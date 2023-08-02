<template>
  <div class="">
    <van-nav-bar title="选择患者" left-arrow @click-left="onClickLeft" />
    <div class="xia">
      <div class="text">
        <p>请选择患者信息</p>
        <span>以便医生给出更准确的治疗，信息仅医生可见</span>
      </div>
      <div class="user" v-for="item in data" :key="item.id" @click="GetUserList(item.id)">
        <div class="yi">
          <span>{{ item.name }}</span> &nbsp; &nbsp;
          <span class="num">{{ item.idCard }}</span> &nbsp; &nbsp; 
          <span v-if="item.defaultFlag == 1" class="greennnn"> 默认</span> <br />
        </div>
        <div class="er">
          <span>{{ item.genderValue }}</span> &nbsp; &nbsp; &nbsp;<span>{{ item.age }}</span>
        </div>
        <div class="edit">
          <van-icon name="edit" />
        </div>
      </div>
      <!--  -->
      <div class="user2" @click="AddUser">
        <van-icon name="plus" />
        <p>添加患者</p>
      </div>
      <p class="num">最多可添加6人</p>
      <div class="num2">
        <van-button type="success" @click="gotoPay">下一步</van-button>
      </div>
    </div>



    <!-- 子组件添加患者信息 -->
    <patientadd :showRight="showRight" :title="title"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryListUser } from '../utils/api'
import patientadd from "../components/patientadd.vue"
const router = useRouter()
const route = useRoute()
const data = ref()
//返回
const onClickLeft = () => {
  router.push('/illness')
}
//患者信息
const GetUser = () => {
  QueryListUser().then((res) => {
    // console.log(res, 'QueryListUser')
    data.value = res.data.data
  })
}
GetUser()

//去到支付页面
const gotoPay=()=>{
  router.push('/payList')
}

//点击内容传给支付页面
const GetUserList=(id:number)=>{
  // console.log(item,'item');
  router.push({path:'/payList',query:{id}})
  
}


//声明标题
const title = ref('添加')
//点击出现添加弹出框
const showRight =ref(false)
const AddUser =()=>{
  showRight.value= true
  title.value = '添加'
}

</script>

<style lang="scss" scoped>
.text {
  width: 100vw;
  height: 70px;
  padding-left: 20px;
  span {
    font-size: 14px;
    color: #554b4b;
  }
}
.user2{
  width: 95%;
  height: 90px;
  margin: 15px auto;
  background-color: #cccccc2e;
  border-radius: 10px;
  text-align: center;
  color: #16c2a3;
  p{
    font-size: 14px;
  }
  .van-icon{
    padding-top: 20px;
  }
}
.user {
  width: 90%;
  height: 100px;
  margin: 15px auto;
  background-color: #cccccc2e;
  border-radius: 10px;
  padding-left: 20px;
  position: relative;
  .yi {
    height: 50px;
    line-height: 50px;
    .num {
      font-size: 14px;
    }
    .greennnn {
      display: inline-block;
      width: 35px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background-color: #16c2a3;
      font-size: 14px;
      color: #fff;
    }
  }
  .er {
    height: 40px;
    line-height: 40px;
    color: #635e5e;
    font-size: 14px;
  }
  .edit {
    position: absolute;
    right: 20px;
    top: 50px;
  }
}

.van-button {
  width: 97%;
  background-color: #16c2a3;
  border-radius: 50px;
}
.num {
  font-size: 14px;
  padding-left: 20px;
  height: 70px;
  line-height: 70px;
}
.num2 {
  font-size: 14px;
  padding-left: 20px;
  height: 100px;
  line-height: 100px;
}
</style>
