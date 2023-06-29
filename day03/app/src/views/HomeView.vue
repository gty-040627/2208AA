<template>
  <div>
    <ChildrenView>
      <!-- 匿名插槽 -->
      <p>我是匿名插槽</p>
      <!-- 具名插槽 -->
      <p name="gty">我是具名插槽</p>
      <!-- 作用域插槽 -->
      <!-- <template slot-scope="{ games }" slot="item">
        <ul>
          <li v-for="item,index in games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template> -->
    </ChildrenView>

    

    <button @click="gotoQuery">使用query传参</button>
    <button @click="gotoParams">使用params传参</button>


   

  </div>
</template>

<script>
import ChildrenView from "../components/ChildrenView"
export default {
  data() {
    return {

    }
  },
  methods: {
    gotoQuery() {
      this.$router.push({ path: 'QueryView', query: { id: 9999 } })
    },
    gotoParams() {
      this.$router.push({ name: 'ParamsView', params: { id: 8888 } })
    },
    
  },
  created() {

  },
  mounted() {

  },
  components: {
    ChildrenView
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped></style>

