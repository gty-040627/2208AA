<template>
  <div class="Bigadd">
    <van-popup
      v-model:show="props.showRight"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <van-nav-bar
        :title="props.title"
        right-text="保存"
        left-arrow
        @click-left="router.back('-1')"
        @click-right="()=>emit('onClickRight')"
      />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="form.name"
            name="真实姓名"
            label="真实姓名"
            placeholder="请输入真实姓名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="form.idCard"
            name="pattern"
            label="身份证号"
            placeholder="请输入身份证号"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
        </van-cell-group>
      </van-form>
      <div class="patientadd-sex">
        <p>性别</p>
        <div class="patientadd-sexs">
          <button :class="{ active: form.gender == 1 }" @click="btnClick(1)">男</button>
          <button class="btnr" :class="{ active: form.gender == 0 }" @click="btnClick(0)">
            女
          </button>
        </div>
      </div>
      <div class="patientadd-int">
        默认就诊人
        <input
          type="radio"
          id="male"          
          name="gender"
          value="male"
          v-model="form.defaultFlag"
          class="ints"
        />
      </div>

      <van-sticky :offset-bottom="10" position="bottom">
    <div class="Illness-btns" @click="()=>emit('dels')">
        <van-button style="background-color: #dc503a;" v-if="title=='编辑'">删除</van-button>
       </div>
</van-sticky>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps(['showRight','title'])
// const genderValue=ref(0)
// 患病多久了切换
const btnClick = (index) => {
  console.log(index, 'index')
  form.value.gender = index
}
const form = ref({
  defaultFlag: 0,
  name: '',
  idCard: '',
  gender: 0,
  // id:''
})
const onSubmit = (values) => {
  console.log('submit', values)
}
// 身份证号校验
const pattern =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/

  const emit=defineEmits(['onClickRight','dels'])
  const formrow=(item)=>{
	console.log(item,'4444444444');
  form.value.defaultFlag=item.defaultFlag
  form.value.name=item.name
  form.value.idCard=item.idCard
  form.value.gender=item.gender
  form.value.id=item.id

}


// 保存
defineExpose({
  form,
  formrow
})
</script>

<style lang="scss" scoped>
.Bigadd{
  width: 100vw;
  height: 100vh;
}
.patientadd-sex {
  padding: 0 0 0 30px;
  display: flex;
  .patientadd-sexs {
    margin-left: 18vw;
    button {
      width: 60px;
      height: 30px;
      border: none;
      border-radius: 5px;
    }
    .btnr {
      margin-left: 10px;
    }
  }
}
.patientadd-int {
  padding: 0 0 0 30px;
  height: 30px;
  .ints {
    display: inline-block;
    margin-left: 6vw;
  }
}
.active {
  border: 2px solid #077457;
  background-color: #ecf8f6 !important;
}
</style>
