<template>
	<div class='CategoriesList'>
		<el-dialog v-model="dialogVisible" title="提示" width="30%"  :before-close="closeDel">
      <span> ❗ 此操作将永远删除该用户，是否继续？</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDel">取消</el-button>
          <el-button type="primary" @click="()=>emit('DelOkk')"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
//设置弹出框状态
const dialogVisible = ref(true)
const emit = defineEmits(['DelOkk','closeDel'])

const closeDel =()=>{
	emit('closeDel',false)
}
</script>

<style lang='scss' scoped>

</style>
