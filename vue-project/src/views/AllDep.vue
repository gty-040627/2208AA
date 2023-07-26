<template>
  <div class='all'>
    全部科室
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss' scoped>

</style>
