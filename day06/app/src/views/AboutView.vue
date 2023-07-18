<template>
  <div class='about'>
    <ul>
      <li v-for="item,index in top" :key="index" @click="change(index)">{{ item.name }}</li>
    </ul>
    <keep-alive>
      <component :is="componentId.com"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs,markRaw } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
 import One from "../components/One"
 import Fore from "../components/Fore"
 import Three from "../components/Three"
 import Two from "../components/Two"
const store = useStore();
const router = useRouter();
const route = useRoute();
const top = reactive([ 
  {name:"A组件",com:markRaw(One)},
  {name:"B组件",com:markRaw(Two)},
  {name:"C组件",com:markRaw(Three)},
  {name:"D组件",com:markRaw(Fore)},
]);
const componentId = reactive({
  com:top[0].com
})
const change =(index)=>{
  componentId.com = top[index].com
}


</script>

<style lang='scss' scoped>
ul{
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
li{
  list-style: none;
}
</style>



