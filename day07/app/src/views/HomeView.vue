<template>
  <div class='home'>
    <component :is="One"/>
    <br />
    <hr />
    <component :is="change ? gaotianyuan : One " />
    <button @click="change = true">切换组件</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import gaotianyuan from "../components/gaotianyuan.vue"
import One from "../components/One.vue"
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});

const change = ref(false)

</script>

<style lang='scss' scoped>

</style>

