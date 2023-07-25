<template>
  <div class="about">
    <div class="home-page">
      <!-- 头部 -->
      <div class="home-header">
        <div class="con">
          <h1>优医</h1>
          <div class="search">
            <van-icon name="search" />
            搜一搜：疾病/症状/医生/健康知识
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="home-navs">
        <van-row>
          <van-col span="8">
            <router-link to="/" class="nav">
              <img src="../../public/icon_14dhfnxbzsfd/dingweiweizhi.png" alt="" class="imgimgimg"/>
              <p class="title">问医生</p>
              <p class="desc">按科室查问医生</p>
            </router-link>
          </van-col>
          <van-col span="8">
            <router-link to="/consult/fast" class="nav">
              <img src="../../public/icon_14dhfnxbzsfd/fangkeyaoqing.png" alt="" class="imgimgimg"/>
              <p class="title">极速问诊</p>
              <p class="desc">20s医生极速回复</p>
            </router-link>
          </van-col>
          <van-col span="8">
            <router-link to="/" class="nav">
              <img src="../../public/icon_14dhfnxbzsfd/jishiben.png" alt="" class="imgimgimg"/>
              <p class="title">开药门诊</p>
              <p class="desc">线上买药更方便</p>
            </router-link>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <router-link to="/" class="nav min">
              <img src="../../public/icon_14dhfnxbzsfd/kabao.png" alt="" class="imgs" />
              <p class="title">药品订单</p>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/" class="nav min">
              <img src="../../public/icon_14dhfnxbzsfd/shangchuanziliao.png" alt="" class="imgs" />
              <p class="title">健康档案</p>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/" class="nav min">
              <img src="../../public/icon_14dhfnxbzsfd/wuyefengcai.png" alt="" class="imgs" />
              <p class="title">我的处方</p>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/" class="nav min">
              <img src="../../public/icon_14dhfnxbzsfd/shangchuanziliao.png" alt="" class="imgs" />
              <p class="title">疾病查询</p>
            </router-link>
          </van-col>
        </van-row>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <van-swipe indicator-color="#fff">
          <van-swipe-item>
            <img src="../../public/ad.c4ee3bf4.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../public/ad.c4ee3bf4.png" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- tab栏 -->
      <van-tabs shrink sticky v-model:active="active">
        <van-tab title="关注">1</van-tab>
        <van-tab title="推荐">
          <!-- 子组件 -->
          <knowledge />
        </van-tab>
        <van-tab title="减脂">
          <!-- 子组件 -->
          <knowledge />
        </van-tab>
        <van-tab title="饮食">4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import knowledge from "../components/knowledge.vue"
const router = useRouter()
const route = useRoute()
// active 的值是 tab 的索引
const active = ref(1)

</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.about {
  background-color: #fafafb;
}
.imgs {
  width: 35px;
  height: 35px;
}
.imgimgimg {
  width: 60px;
  height: 60px;
}
.home-page {
  padding-bottom: 50px;
}
.home-header {
  height: 100px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, rgba(62, 206, 197, 0.85), #26bcc6);
    border-bottom-left-radius: 150px 20px;
    border-bottom-right-radius: 150px 20px;
  }
  .con {
    position: relative;
    padding: 0 15px;
    > h1 {
      font-size: 18px;
      color: #fff;
      font-weight: normal;
      padding: 20px 0;
      line-height: 1;
      padding-left: 5px;
    }
    .search {
      height: 40px;
      border-radius: 20px;
      box-shadow: 0px 15px 22px -7px rgba(224, 236, 250, 0.8);
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: #7b7676;
      font-size: 13px;
      .van-icon {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
}
.home-navs {
  padding: 10px 15px 0 15px;
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    .cp-icon {
      font-size: 48px;
    }
    .title {
      font-weight: 500;
      color: #000;
      font-size: 14px;
    }
    .desc {
      font-size: 11px;
      color: #7b7676;
      margin-top: 2px;
    }
    &.min {
      .cp-icon {
        font-size: 31px;
      }
      .title {
        font-size: 13px;
        color: #000;
        font-weight: normal;
        padding-top: 5px;
      }
    }
  }
}
.home-banner {
  padding: 10px 15px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}


</style>
