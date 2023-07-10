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
          <el-menu-item index="/DepartmentView">
            <i class="el-icon-setting"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
          <el-menu-item index="/UserView">
            <i class="el-icon-user"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="/ApplyView">
            <i class="el-icon-setting"></i>
            <span slot="title">权限设置</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-s-grid"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="/CfgList">
            <i class="el-icon-s-comment"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-box"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-receiving"></i>
            <span slot="title">审核</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i class="el-icon-s-fold"></i>
            <span class="title">江苏传智播客教育科技股份有限公司</span>
            <span class="small">体验版</span>
          </div>
          <div class="toeing">
            <i class="el-icon-menu"></i>
            <i class="el-icon-search"></i>
            <span class="backColor"
              ><i class="el-icon-arrow-down" size="small"></i
            ></span>
            <el-dropdown @command="handler">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="GotoAbout">首页</el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
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
  methods: {
    handler(command) {
      if (command == 'GotoAbout') {
        // console.log(111)
        this.$router.push('/about')
      } else if (command == 'b') {
        // console.log('b')
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
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
  justify-content: space-between;
  align-items: center;
  background-color: #5a83eb;
  color: #fff;
  .toeing {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .backColor {
      width: 30px;
      height: 30px;
      background-color: #3361d589;
      color: #fff;
      border: 1px solid #fff;
      text-align: center;
      line-height: 30px;
    }
  }
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
