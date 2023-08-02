<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { QueryLogin } from '../utils/api'
import * as TS from '../utils/defind'
import { showToast } from 'vant'
const route = useRoute()
const router = useRouter()
//密码小眼睛
let icon = ref(false)

//手机号密码
const from = ref<TS.Login>({
  mobile: '13230000001',
  password: 'abc12345'
})
//复选框
const checked = ref(false)

//登录
const login = () => {
  if (checked.value == false) {
    showToast('请勾选我已同意')
  } else if (checked.value == true) {
    QueryLogin(from.value).then((res) => {
      // console.log(res, 'QueryLogin');
      localStorage.setItem('token', res.data.data.token)
      router.push('/home/my')
    })
  }
}
</script>

<template>
  <div class="login">
    <van-nav-bar title="优医问诊-登录" />
    <van-nav-bar right-text="注册" left-arrow />
    <div class="password">
      <span class="word">密码登录</span>
      <span class="text">短信验证码登录 ></span>
    </div>
    <van-form>
      <van-cell-group inset>
        <van-field
          v-model="from.mobile"
          name="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="from.password"
          :type="icon ? 'text' : 'password'"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
          :right-icon="!icon ? 'closed-eye' : 'eye-o'"
          @click-right-icon="icon = !icon"
        />
        <div class="lll">
          <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
          <span class="miss">
            我已同意
            <span class="color">用户协议</span>
            及
            <span class="color">隐私条款</span>
          </span>
        </div>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="success" native-type="submit" @click="login">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="forget">忘记密码？</div>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  .password {
    width: 100%;
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-around;
    .word {
      font-size: 26px;
    }
    .text {
      font-weight: 500;
    }
  }
  .lll {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .van-checkbox {
      margin-left: 20px;
    }
    .miss {
      font-size: 15px;
      padding-left: 20px;
      .color {
        color: #07c160;
      }
    }
  }
  .forget {
    font-size: 15px;
    padding-left: 25px;
  }
}
</style>
