<template>
  <div>
     <button @click="changePersons">修改信息</button>
     <ul>
      <li v-for="item in persons" :key="item.id">
        {{ item.id }}  -- {{ item.name }}
      </li>
     </ul>
 </div>
</template>

<script>
export default {
  data () {
    return {
      persons:[
        {id:"001",name:"嘻嘻嘻"},
        {id:"002",name:"哈哈哈"},
        {id:"003",name:"咳咳咳"},
        {id:"004",name:"呵呵呵"},
        {id:"005",name:"吼吼吼"},
      ]
    }
  },
  methods: {
    changePersons(){
      console.log('触发了点击事件');
      // this.persons[0].name="被修改了"   //奏效
      // this.persons[0]= {id:"001",name:"嘻嘻嘻"} //不奏效
      // this.persons.splice(0,1,{id:"001",name:"被修改了"})   //奏效
      this.$set(this.persons[0],'name','被修改了')    //奏效
    }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>

