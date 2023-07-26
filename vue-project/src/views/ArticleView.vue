<template>
  <div class='article'>
    article
    <br>
    <button @click="change">改变</button>
    <p>{{ flag }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const flag = ref(false)
const change=()=>{
  flag.value =! flag.value
}
</script>

<style lang='scss' scoped>

</style>
