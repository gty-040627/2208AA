<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#5485fd"
          text-color="#fff"
          active-text-color="#ffffff"
          active-background-color="#ffffff"
          router
        >
          <el-menu-item>
            <img src="../assets/common/logo.png" alt="" class="imging" />
          </el-menu-item>
          <el-menu-item index="/about" class="eling">
            <i class="el-icon-document"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/OriginChart">
            <i class="el-icon-setting"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
          <el-menu-item index="/UserView">
            <i class="el-icon-user"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-setting"></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-setting"></i>
            <span slot="title">权限设置</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-s-grid"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-s-comment"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-box"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="/SetView">
            <i class="el-icon-receiving"></i>
            <span slot="title">审核</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-s-fold"></i>
          <span class="title">江苏传智播客教育科技股份有限公司</span>
          <span class="small">体验版</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  width: 220px !important;
  i {
    color: #fff;
  }
}
.el-menu-item.is-active {
  background-color: #fff !important;
  color: #fff;
  span {
    color: blue !important;
  }
  i {
    color: blue;
  }
}

.eling {
  margin-top: 20px;
}
.el-aside {
  color: #fff;
}
.el-icon-menu {
  padding-left: 500px;
  font-size: 25px;
}
.el-header {
  display: flex;
  align-items: center;
  background-color: #5485fd;
  color: #fff;
  .title {
    padding-left: 20px;
    font-size: 20px;
  }
  .small {
    display: inline-block;
    width: 70px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    background-color: #84a9fe;
    margin-left: 15px;
  }
}
</style>
