import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getToken } from '../../untils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'DepartmentView',
        name: 'DepartmentView',
        component: () => import('../views/DepartmentView.vue')
      },
      {
        path: 'UserView',
        name: 'UserView',
        component: () => import('../views/UserView.vue')
      },
      {
        path: 'SetView',
        name: 'SetView',
        component: () => import('../views/SetView.vue')
      },
      {
        path: 'ApplyView',
        name: 'ApplyView',
        component: () => import('../views/ApplyView.vue')
      },
      {
        path: 'CfgList',
        name: 'CfgList',
        component: () => import('../views/CfgList.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token && to.path == '/login') {
    next('/')
  } else if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
