<template>
  <div >
    <div class='ooo'>
        组件二
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss' scoped>
.ooo{
    width: 500px;
    height: 300px;
    margin: 30px auto;
    background-color:pink;
}
</style>
