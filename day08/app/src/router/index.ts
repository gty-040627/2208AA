import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },{
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },{
    path: '/TransferAccount',
    name: 'TransferAccount',
    component: () => import( '../views/TransferAccount.vue')
  },{
    path: '/Record',
    name: 'Record',
    component: () => import( '../views/Record.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(token && to.path == '/login'){
    next('/about')
  }else if(!token && to.path !== '/login'){
    next('/login')
  }else{
    next()
  }
})

export default router
