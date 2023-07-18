<template>
  <div class="">
    <el-dialog v-model="dialogVisible" title="物流信息" width="50%" :before-close="closeDel">
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.time">
          {{ activity.context }}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import {queryOrderskuaidi} from "../api/api"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
//设置弹出框状态
const dialogVisible = ref(true)

const activities = ref()
//物流接口
const GetWuliu = () => {
  queryOrderskuaidi().then(res=>{
  	console.log(res,'queryOrderskuaidi');
		activities.value =res.data
  })
}
GetWuliu()

const emit = defineEmits(["closeDel"])

const closeDel = () => {
  emit("closeDel", false)
}
</script>

<style lang="scss" scoped></style>
