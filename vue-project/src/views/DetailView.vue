<template>
  <div class="detail">
    <van-nav-bar title="问诊详情" left-arrow @click-left="onClickLeft" />
    <div class="top">
      <div class="top-item">
        <p>
          <span class="weight-item">图文问诊 {{ data.actualPayment }} 元</span
          ><span class="Status-item">{{ data.statusValue }}</span>
        </p>
        <p class="text">服务医生信息</p>
      </div>
    </div>
    <div class="top-item2">
      <div><img src="../../public/avatar-doctor.svg" alt="" /></div>
      <div class="zhong">
        <span>极速问诊</span> <br />
        <span class="span2">暂未分配医生</span>
      </div>
      <div class="dayu">></div>
    </div>
    <!-- 信息 -->
    <div class="kong"></div>
    <div class="texts">
      <span class="title">患者信息</span>
      <div class="small-item">
        <span>{{ data.patientInfo.name }}</span> | <span>{{ data.patientInfo.genderValue }}</span> |
        <span>{{ data.patientInfo.age }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">患病时长</span>
      <div class="small-item">
        <span v-if="data.illnessTime == 1">一周内</span>
        <span v-if="data.illnessTime == 2">一月内</span>
        <span v-if="data.illnessTime == 3">半年内</span>
        <span v-if="data.illnessTime == 4">大于半年</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">就诊情况</span>
      <div class="small-item">
        <span v-if="data.consultFlag == 0">就诊过</span>
        <span v-if="data.consultFlag == 1">没有就诊</span>
      </div>
    </div>
    <div class="textss">
      <span class="title">病情描述</span><br />
      <div class="small-item">
        <span>{{ data.illnessDesc }}</span>
      </div>
    </div>
    <!--  -->
    <div class="ccc"></div> 
    <!-- 订单信息 -->
    <div class="texts">
      <span class="title">订单信息</span>
      <div class="small-item">
        <span>{{ data.patientInfo.name }}</span> | <span>{{ data.patientInfo.genderValue }}</span> |
        <span>{{ data.patientInfo.age }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">订单编号</span>
      <div class="small-item">
        <span>{{ data.orderNo }}</span>
      </div>
    </div>
    <div class="texts"> 
      <span class="title">创建时间</span>
      <div class="small-item">
        <span>{{ data.orderNo }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">应付款</span>
      <div class="small-item">
        <span>￥{{ data.payment }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">优惠卷</span>
      <div class="small-item">
        <span>-￥{{ data.couponDeduction }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">积分抵扣</span>
      <div class="small-item">
        <span>-￥{{ data.couponDeduction }}</span>
      </div>
    </div>
    <div class="texts">
      <span class="title">实付款</span>
      <div class="small-item">
        <span class="big">￥{{ data.actualPayment }}</span>
      </div>
    </div>
    <div class="timeing">请在{{ timeText }}内完成完成支付,超时订单将取消</div>
    <div class="ccc2"></div>
    <!-- 固定定位 -->
    <div class="btn">
      <span class="left-btn"
        ><span class="iiii">需付款</span> <span class="big">￥{{ data.actualPayment }}</span></span
      >
      <van-button>取消问诊</van-button>
      <van-button type="primary" @click="OpenPay">继续支付</van-button>
    </div>

    <!-- 自定义面板 -->
    <van-action-sheet v-model:show="show" title="选择支付方式">
      <div class="content">￥{{ data.actualPayment }}.00</div>
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
          <van-radio name="2" ></van-radio>
        </van-radio-group>
      </div>
      <button class="btn222" @click="GetPay">立即支付</button>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, reactive, toRefs, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryListDetil ,QueryPay} from '../utils/api'
import { showToast } from 'vant'
import * as TS from '../utils/defind'
const router = useRouter()
const route = useRoute()
//控制面板
const show = ref(false)
//打开支付方式
const OpenPay = () => {
  show.value = true
}
//复选框
const checked = ref(false)
const weixin=()=>{
  showToast('不支持该支付方式');
}

//接收id
const data = ref()
console.log(route.query.ids)
let id = route.query.ids
// const orderId = ref()
// orderId.value = route.query.ids
//详情接口
QueryListDetil(id).then((res) => {
  // console.log(res, 'QueryListDetsil')
  data.value = res.data.data
})
//返回
const onClickLeft = () => {
  router.push('/list')
}



//支付
const payList =ref<TS.pay> ({
  orderId: '',
  payCallback: "http://127.0.0.1:5173/list",
  paymentMethod: '1',
})
//点击支付按钮
const GetPay=()=>{
  payList.value.orderId = data.value.id
  console.log(payList.value);
  QueryPay(payList.value).then(res=>{
    // console.log(res,'QueryPay');
    location.href = res.data.data.payUrl
  })
}




//倒计时 实现
interface Props {
  startTime: number
  endTime: number
}
// 定义默认的Props值
const props = withDefaults(defineProps<Props>(), {
  startTime: Date.now(),
  endTime: Date.now() + 1000 * 60 * 60 * 24
})
const { startTime, endTime } = toRefs(props)
// 创建响应式数据remainingTime，表示剩余时间
const remainingTime = ref(endTime.value - startTime.value)
// 定义用于格式化时间的函数
const formatTimeText = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`
}
// 定义更新remainingTime的函数
const updateTime = (props: Props) => {
  remainingTime.value = props.endTime - Date.now()
}
// 监听props的变化，每秒钟更新一次remainingTime
watchEffect(() => {
  updateTime(props)
  const timer = setInterval(() => {
    updateTime(props)
  }, 1000)
  return () => {
    /**
     * 返回一个停止观察的函数。
     * 这个函数被调用时，将取消对响应式数据的监听。
     * 当组件销毁时，需要停止定时器并取消watchEffect的监听。
     * 为此，可以使用return关键字来返回一个函数，这个函数包含清除定时器的逻辑。
     * 因此，当组件被销毁时，这个函数就会被调用，从而清除定时器并取消对remainingTime的监听。
     */
    clearInterval(timer)
  }
})
//利用computed函数计算倒计时文本
const timeText = computed(() => {
  // const hours = Math.floor((remainingTime.value / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((remainingTime.value / 1000 / 60) % 15)
  const seconds = Math.floor((remainingTime.value / 1000) % 60)
  return `${formatTimeText(minutes)}:${formatTimeText(seconds)}`
})

//继续支付点击按钮
const onSubmit = () => showToast('点击按钮')
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  position: relative;
}
//面板
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
.btn222{
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
.kong {
  height: 50px;
}
.ccc {
  height: 10px;
  background-color: #cccccc2b;
}
.ccc2 {
  height: 50px;
  background-color: #cccccc2b;
}
.van-button {
  width: 100px;
  height: 40px;
  border-radius: 30px;
}
.title {
  font-size: 14px;
}
.big {
  font-size: 18px;
  color: red;
}
.top {
  width: 100vw;
  height: 130px;
  background: linear-gradient(to bottom, #fff, #eff9f8, #dff3f0);
  border-radius: 0 0 50px 50px;
  overflow: hidden;

  .top-item {
    width: 90%;
    height: 40px;
    margin: auto;
    p {
      display: flex;
      justify-content: space-between;
      .weight-item {
        font-weight: 700;
      }
      .Status-item {
        color: orange;
      }
    }
  }
}
.text {
  font-size: 14px;
  color: #7b7575;
}
.top-item2 {
  width: 90%;
  height: 70px;
  background-color: #fff;
  box-shadow: 2px 2px 1px 1px #ccc;
  border-radius: 5px;
  position: absolute;
  top: 130px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }
  .dayu {
    padding-right: 20px;
    color: #766d6dd1;
  }
  .zhong {
    width: 200px;
    .span2 {
      font-size: 14px;
      color: #766d6dd1;
    }
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
.texts {
  width: 90vw;
  height: 50px;
  margin: auto;
  border-bottom: 1px solid #cccccc7c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .small-item {
    font-size: 14px;
    color: #797272;
  }
}

.timeing {
  height: 50px;
  line-height: 50px;
  background-color: #fff7eb;
  color: #f29e62;
  text-align: center;
  font-size: 14px;
}
.btn {
  width: 100vw;
  height: 60px;
  background-color: #f6f7f9;
  position: fixed;
  top: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.iiii {
  font-size: 14px;
  padding-left: 10px;
}
.left-btn {
  width: 130px;
}
</style>
