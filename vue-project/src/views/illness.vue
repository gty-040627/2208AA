<template>
  <div class="illness">
    <van-nav-bar title="图文问诊" left-arrow @click-left="onClickLeft" />
    <cp-nav-bar title="图文问诊" />
    <!-- 医生提示 -->
    <div class="illness-tip van-hairline--bottom">
      <img class="img" src="../../public/avatar-doctor.svg" />
      <div class="info">
        <p class="yi">在线医生</p>
        <p class="er">请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助</p>
        <p class="san"><span>内容仅医生可见</span></p>
      </div>
    </div>
    <!-- 收集信息 -->
    <div class="form">
      <van-field
        type="textarea"
        rows="3"
        placeholder="请详细描述您的病情，病情描述不能为空"
        v-model="from.illnessDesc"
      ></van-field>
      <div class="item">
        <p>本次患病多久了？</p>
        <span class="spa" :style="getStyle(item)" v-for="item in times" @click="timeing(item)">{{
          item.label
        }}</span>
      </div>
      <div class="item">
        <p>此次病情是否去医院就诊过？</p>
        <span
          class="spa"
          :style="getStyle(item)"
          v-for="item in timeStatus"
          @click="statusing(item)"
          >{{ item.label }}
        </span>
      </div>
      <div class="divimg">
        <van-uploader v-model="fileList" multiple />
      </div>
      <van-button type="success" @click="gotoUser">下一步</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showToast } from 'vant'
const router = useRouter()
const route = useRoute()
const data = reactive({})
// console.log(route.query.id,'ididididd');
const id = ref(route.query.id)
localStorage.setItem('id', id.value)

//返回
const onClickLeft = () => {
  router.push('/alldep')
}

const from = ref({
  illnessDesc: ''
})

//上传图片
const fileList = ref([
  // { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
  // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
  // { url: 'https://cloud-image', isImage: true }
])

//患病时长
const times = ref([
  { label: '一周内', value: 1, status: false },
  { label: '一月内', value: 2, status: false },
  { label: '半年内', value: 3, status: false },
  { label: '大于半年', value: 4, status: false }
])

//去过没去过状态 
const timeStatus = ref([
  { label: '就诊过', value: 0, status: false },
  { label: '没就诊过', value: 1, status: false }
])

//点击患病时长
const getStyle = (item: any) => {
  if (item.status) {
    return { background: '#eaf8f6' }
  }
}
const timeing = (item: any) => {
  let currentState = item.status
  times.value.forEach((el) => {
    el.status = false
  })
  item.status = !currentState
  localStorage.setItem('time', times.value[1].value)
}
//状态
const statusing = (item: any) => {
  let currentState = item.status
  timeStatus.value.forEach((el) => {
    el.status = false
  })
  item.status = !currentState
  localStorage.setItem('status', timeStatus.value[0].value)
}

//接口
const gotoUser = () => {
  if (from.value.illnessDesc == '') {
    showToast('病情描述为空')
  } else {
    localStorage.setItem('text', from.value.illnessDesc)
    localStorage.getItem('time')
    localStorage.getItem('status')
    router.push('/user')
  }
}
</script>

<style lang="scss" scoped>
.illness-tip {
  display: flex;
  padding: 15px;
  .img {
    width: 52px;
    height: 52px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 10px;
  }
  .info {
    flex: 1;
    padding-left: 12px;
    .yi {
      font-size: 16px;
      margin-bottom: 5px;
    }
    .er {
      padding: 12px;
      background: #cccccc32;
      color: #ccc;
      font-size: 13px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .san {
      font-size: 10px;
      color: #908888;
      display: flex;
      align-items: center;
      .cp-icon {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
}
.form {
  padding: 15px;
  .van-field {
    padding: 0;
    &::after {
      border-bottom: none;
    }
  }
  .item {
    > p {
      color: #857e7ed0;
      font-size: 15px;
    }
  }
}

.spa {
  display: inline-block;
  width: 70px;
  height: 35px;
  border-radius: 10px;
  background-color: #cccccc5b;
  font-size: 15px;
  text-align: center;
  line-height: 35px;
  margin: 0 5px;
}
.divimg {
  width: 100%;
  height: 100px;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #8e8383;
  .left {
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 5px;
    background-color: #f7f8fa;
    position: relative;
    img {
      width: 35px;
      height: 35px;
      margin-top: 10px;
    }
    p {
      position: absolute;
      bottom: 0px;
      left: 13px;
    }
  }
}

.van-button {
  width: 95%;
  border-radius: 30px;
  background-color: #16c2a3;
}
</style>
