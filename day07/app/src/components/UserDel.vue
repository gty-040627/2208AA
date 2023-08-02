<template>
  <div class="del">
    <el-dialog v-model="dialogVisible" title="提示" width="30%" :before-close="closeDel" :close-on-click-modal="false">
      <span> ❗ 此操作将永远删除该用户，是否继续？</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDel">取消</el-button>
          <el-button type="primary" @click="emit('delOkk')"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { ElMessage, ElMessageBox } from "element-plus"

//设置弹出框状态
const dialogVisible = ref(true)

//获取父组件传过来的方法
const emit = defineEmits(["delOkk", "closeDel"])

const props = defineProps(["id"])
// console.log(props.id,"oooo");

const closeDel = () => {
  emit("closeDel", false)
}
</script>

<style lang="scss" scoped>
.dialog-footer {
  margin-left: 150px;
}
</style>
