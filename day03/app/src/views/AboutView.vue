<template>
  <div>
    <router-view></router-view>
    <button @click="gotochildren">点击进入children</button>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    gotochildren(){
      this.$router.push({path:"about/ Children"})
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

