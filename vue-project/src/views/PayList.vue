<template>
  <div class="pay">
    <van-nav-bar title="支付页面" left-arrow @click-left="onClickLeft" />
    <p class="text">图文问诊 {{ list.payment }} 元</p>
    <div class="top">
      <div><img src="../../public/avatar-doctor.svg" alt="" /></div>
      <div>
        <p>极速问诊<br /><span>自动分配医生</span></p>
      </div>
    </div>
    <div class="texts">
      <span class="title">优惠卷</span>
      <div class="small-item">
        <span>-￥{{ list.pointDeduction }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">积分抵扣</span>
      <div class="small-item">
        <span>-￥{{ list.couponDeduction }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">实付款</span>
      <div class="big-red">
        <span>-￥{{ list.payment }}</span>
      </div>
    </div>
    <!--  -->
    <div class="ccc"></div>
    <div class="texts">
      <span class="title">患者信息</span>
      <div>
        <span class="small-item">{{ data.name }} | {{ data.genderValue }} | {{ data.age }} </span>
      </div>
    </div>
    <div class="textss">
      <span class="title">病情描述</span><br />
      <div class="small-item">
        <span>11111111</span>
      </div>
    </div>
    <div class="lll">
      <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
      <span class="miss">
        我已同意
        <span class="color">支付协议</span>
      </span>
    </div>
    <!-- 固定定位 -->
    <div class="btn">
      <span class="left-btn"
        ><span class="iiii">合计</span> <span class="big">￥{{ list.payment }}</span></span
      >
      <van-button type="primary" @click="OnPay">继续支付</van-button>
    </div>

    <!-- 弹出面板 -->
    <van-action-sheet v-model:show="show" title="选择支付方式">
      <div class="content">￥{{ list.actualPayment }}.00</div>
      <div class="box">
        <img src="../../public/wwwwwww.png" alt="" />
        <span>微信支付</span>
        <van-radio-group v-model="checked">
          <van-radio name="1" @click="weixin"></van-radio>
        </van-radio-group>
      </div>
      <div class="box">
        <img src="../../public/zzzzzz.png" alt="" />
        <span>支付宝</span>
        <van-radio-group v-model="checked">
          <van-radio name="2"></van-radio>
        </van-radio-group>
      </div>
      <button class="btn222" @click="GetPay">立即支付</button>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryPayList, getPay, QueryPay, getPayList } from '../utils/api'
import * as TS from '../utils/defind'
import { showToast } from 'vant'
const router = useRouter()
const route = useRoute()
// console.log(route.query.item,'route.query.item');

//返回
const onClickLeft = () => {
  router.push('/user')
}
//渲染基本支付钱款
const types = ref<TS.payList>({
  type: 2,
  illnessType: 1
})

const list = ref()
const GetList = () => {
  QueryPayList(types.value).then((res) => {
    // console.log(res, 'QueryPayList')
    list.value = res.data.data
  })
}
GetList()

//复选框
const checked = ref(false)

//接收患者信息页面的item
// console.log(route.query.id)
let ids = route.query.id
//患者信息接口，进行渲染
const data = ref()
getPay(ids).then((res) => {
  console.log(res, 'getPay')
  data.value = res.data.data
})

//控制面板
const show = ref(false)
//点击微信复选框
const weixin = () => {
  showToast('不支持该支付方式')
}

//获取信息
const text = ref(localStorage.getItem('text'))
const time = ref(JSON.parse(localStorage.getItem('time')))
const status = ref(JSON.parse(localStorage.getItem('status')))
const id = ref(localStorage.getItem('id'))
const iddd = ref(route.query.id)

// console.log(iddd.value);

const paysData = ref<TS.payList2>({
  consultFlag: '',
  couponId: null,
  depId: '',
  illnessDesc: '',
  illnessTime: '',
  illnessType: 1,
  patientId: '',
  pictures: [],
  type: 2
})

//点击支付按钮
const DatsId = ref()
const OnPay = () => {
  if (checked.value == false) {
    showToast('请勾选我已同意')
  } else {
    //打开支付方式
    show.value = true
    paysData.value.illnessTime = time.value
    paysData.value.illnessDesc = text.value
    paysData.value.consultFlag = status.value
    paysData.value.depId = id.value
    paysData.value.patientId = iddd.value
    getPayList(paysData.value).then((res) => {
      console.log(res, 'getPayList')
      DatsId.value = res.data.data.id
    })
  }
}

//支付
const payList = ref<TS.pay>({
  orderId: '',
  payCallback: 'http://127.0.0.1:5173/list',
  paymentMethod: '1'
})
//点击支付按钮
const GetPay = () => {
  payList.value.orderId = DatsId.value
  console.log(payList.value)
  QueryPay(payList.value).then((res) => {
    console.log(res, 'QueryPay')
    location.href = res.data.data.payUrl
  })
}
</script>

<style lang="scss" scoped>
.text {
  padding-left: 20px;
}
.top {
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc4d;
  img {
    width: 35px;
    height: 35px;
    margin: 0 20px;
  }
  span {
    font-size: 14px;
    color: #615d5d;
  }
}
.title {
  font-size: 14px;
}
.texts {
  width: 90vw;
  height: 50px;
  margin: auto;
  border-bottom: 1px solid #cccccc35;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .small-item {
    font-size: 14px;
    color: #797272;
  }
  .big-red {
    color: red;
    font-size: 16px;
  }
}
.textss {
  width: 90vw;
  height: 50px;
  margin: auto;
  border-bottom: 1px solid #cccccc7c;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  .small-item {
    font-size: 14px;
    color: #797272;
  }
}

.ccc {
  width: 100vw;
  height: 10px;
  background-color: #cccccc3d;
}

.btn {
  width: 100vw;
  height: 60px;
  background-color: #f6f7f938;
  position: fixed;
  top: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .iiii {
    font-size: 14px;
    padding-left: 10px;
  }
  .left-btn {
    width: 130px;
  }
  .big {
    color: red;
    font-size: 18px;
  }
  .van-button {
    width: 130px;
    height: 40px;
    border-radius: 30px;
    background-color: #16c2a3;
  }
}

.lll {
  width: 100vw;
  text-align: center;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  .van-checkbox {
    margin: 10px;
    padding-left: 100px;
  }
  .color {
    color: #07c160;
  }
}

.content {
  width: 100%;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #cccccc72;
  font-weight: 700;
}

.box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    width: 280px;
  }
}
.btn222 {
  display: inline-block;
  width: 95%;
  height: 45px;
  border-radius: 30px;
  background-color: #16c2a3;
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin: 10px auto;
  border: 0;
}
</style>
