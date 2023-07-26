<template>
  <div class="pages">
    <div class="doctor">
      <div className="head">
        <p>推荐关注</p>
        <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
      </div>
      <div class="body">
        <van-swipe :width="150" :show-indicators="false" :loop="false">
          <van-swipe-item v-for="item in list" :key="item.id">
            <div class="card">
              <van-image
                round
                :src="item.avatar"
              />
              <p class="name">{{item.name}}</p>
              <p class="van-ellipsis">{{item.hospitalName}}</p>
              <p>{{item.positionalTitles}}</p>
              <van-button round size="small" type="primary" @click="change">+ 关注</van-button>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>


    <!-- 推荐内容下方 -->
    <knowledge />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import knowledge from "../components/knowledge.vue"
import * as TS from '../utils/defind'
import { QueryPages ,QueryLike} from '../utils/api'
const router = useRouter()
const route = useRoute()
//推荐关注
const data = reactive<TS.pages>({
  current: 1,
  pageSize: 117
})
//推荐关注接口
const list = ref()
const GetList = () => {
  QueryPages(data).then((res) => {
    // console.log(res, 'QueryPages')
    list.value = res.data.data.rows
  })
}
GetList()

//关注已关注接口
const like =ref({
  id: '',
  type: 'doc'
})

const change = ()=>{
  QueryLike(like.value).then(res=>{
    console.log(res,'QueryLike');
    
  })
}


</script>

<style lang="scss" scoped>
.doctor {
  background-color: #f6f7f9;
  height: 250px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
    > a {
      color: #7a7373;
    }
  }
  .body {
    width: 100%;
    overflow: hidden;
  }
}


.card {
  width: 135px;
  height: 190px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 11px 0px rgba(229, 229, 229, 0.2);
  text-align: center;
  padding: 15px;
  margin-left: 15px;
  display: inline-block;
  box-sizing: border-box;
  > .van-image {
    width: 58px;
    height: 58px;
    vertical-align: top;
    border-radius: 50%;
    margin: 0 auto 15px;
  }
  > p {
    margin-bottom: 0;
    font-size: 11px;
    color: #898484;
    &.name {
      font-size: 13px;
      color: #898484;
      margin-top: -10px;
    }
  }
  > .van-button {
    padding: 0 12px;
    height: 28px;
    margin-top: 8px;
    width: 72px;
  }
}
</style>
