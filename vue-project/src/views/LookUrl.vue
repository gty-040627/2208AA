<template>
  <div class='LookUrl'>
    <img src="../../public/处方 (1).png" alt="">
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {QueryListLookUrl} from "../utils/api"
const router = useRouter();
const route = useRoute();
const data = reactive({});
console.log(route.query.id);
let ids =route.query.id
QueryListLookUrl(ids).then(res=>{
  console.log(res,'QueryListLookUrl');
})

</script>

<style lang='scss' scoped>
img{
  width: 100vw;
  height: 70vh;
  margin: 30px auto;
}
</style>
