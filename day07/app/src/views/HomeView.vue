<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="one">
          <img src="../../public/topimg.png" alt="" />
          <p>电商后台管理系统</p>
        </div>
        <div>
          <el-button type="info" @click="GoLogin">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '200px' : '50px'">
          <el-menu active-text-color="#ffd04b" background-color="#333744" default-active="2" text-color="#fff" router>
            <div class="topIcon" @click="ChangeMenu">|||</div>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/user">用户列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
								<el-icon><Memo /></el-icon>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/roles">角色列表</el-menu-item>
              <el-menu-item index="/RightList">权限列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><location /></el-icon>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/GoodsList">商品列表</el-menu-item>
              <el-menu-item index="/Categories">分类参数</el-menu-item>
              <el-menu-item index="/CategoriesList">商品分配</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
             <el-icon> <Message /></el-icon>
                <span>订单管理</span>
              </template>
              <el-menu-item index="/OrdersView">订单列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
             <el-icon> <Grid /></el-icon>
                <span>数据统计</span>
              </template>
              <el-menu-item index="/ReportsView">数据报表</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user' }">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user' }">用户列表</el-breadcrumb-item>
            <!-- <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
          </el-breadcrumb>
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { Location ,Message,Memo,Grid} from "@element-plus/icons-vue"
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
//返回登录页
const GoLogin = () => {
  localStorage.removeItem("token")
  router.push("/login")
}

//展开侧边栏状态
const isCollapse = ref(true)
//点击事件
const ChangeMenu = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 100%;
  background-color: #373d41;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .one {
    display: flex;
    align-items: center;
    p {
      font-size: 20px;
      padding-left: 20px;
    }
  }
}
.el-aside {
  transition: all 0.7s;
}
.el-menu {
  height: calc(100vh - 60px);

  .topIcon {
    width: 100%;
    height: 25px;
    background-color: #4a5064;
    text-align: center;
    color: #fff;
    line-height: 25px;
  }
}

.el-main{
	width: 100%;
	// height: 100vh;
	background-color: #cccccc32;
}
.欢迎{
	font-size: 22px;
	padding: 10px;
}
</style>
