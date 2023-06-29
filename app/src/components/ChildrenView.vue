<template>
  <div>
    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="gty"></slot>
    <!-- 作用域插槽 -->
    <slot :games="games" name="item"></slot>      
 </div>
</template>

<script>
export default {
  data () {
    return {
        games:['王者荣耀','绝地求生','连连看']
    }
  },
  methods: {

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
