<template>
  <div class='room'>
     <van-nav-bar title="医生问诊室" left-arrow  @click-left="onClickLeft" />
    <div class="top">
      <span>{{  }}</span>
      <span>剩余时间：{{ timeText }}</span>  
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs ,computed ,watchEffect} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { QueryListroom} from "../utils/api"
const router = useRouter();
const route = useRoute();
const orderId = ref();
// console.log(route.query.id);
orderId.value = route.query.id
//详情接口
QueryListroom(orderId.value).then(res=>{
  console.log(res,'QueryListroom');
})
//返回
const onClickLeft=()=>{
  router.push('/list')
}

//倒计时 实现
interface Props {
  startTime: number;
  endTime: number;
}
// 定义默认的Props值
const props = withDefaults(defineProps<Props>(), {
  startTime: Date.now(),
  endTime: Date.now() + 1000 * 60 * 60 * 24,
})
const { startTime, endTime } = toRefs(props);

// 创建响应式数据remainingTime，表示剩余时间
const remainingTime = ref(endTime.value - startTime.value);

// 定义用于格式化时间的函数
const formatTimeText = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`;
};

// 定义更新remainingTime的函数
const updateTime = (props: Props) => {
  remainingTime.value = props.endTime - Date.now();
};

// 监听props的变化，每秒钟更新一次remainingTime 
watchEffect(() => {
  updateTime(props);
  const timer = setInterval(() => {
    updateTime(props);
  }, 1000);
  return () => {
    /**
     * 返回一个停止观察的函数。
     * 这个函数被调用时，将取消对响应式数据的监听。
     * 当组件销毁时，需要停止定时器并取消watchEffect的监听。
     * 为此，可以使用return关键字来返回一个函数，这个函数包含清除定时器的逻辑。
     * 因此，当组件被销毁时，这个函数就会被调用，从而清除定时器并取消对remainingTime的监听。
     */
    clearInterval(timer);
  };
});
//利用computed函数计算倒计时文本 
const timeText = computed(() => {
  // const hours = Math.floor((remainingTime.value / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((remainingTime.value / 1000 / 60) % 30);
  const seconds = Math.floor((remainingTime.value / 1000) % 60);
  return `${formatTimeText(minutes)}:${formatTimeText(seconds)}`;
});


</script>

<style lang='scss' scoped>
.room{
  width: 100vw;
  height: 100vh;
  background-color: #cccccc31;
}
.top{
  width: 100vw;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    padding: 0 15px;
  }
}
</style>
