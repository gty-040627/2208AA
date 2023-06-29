import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '/children',
        name: 'children',
        component: () => import('../views/ChildrenView')
      }
    ]
  }, {
    path: '/ParamsView/:id',
    name: 'ParamsView',
    component: () => import('../views/ParamsView.vue')
  }, {
    path: '/QueryView',
    name: 'QueryView',
    component: () => import('../views/QueryView.vue')
  }
]

const router = new VueRouter({
  routes
})

//全局前置路由守卫
router.beforeEach((to,from,next)=>{
  // next()
  if(to.path=="/about"){
    next('/about/children')
  }else{
    next()
  }
})

//全局后置路由
// router.afterEach((to,from)=>{
//   // console.log(to,'12123456');
//   if(to.name==="about"){
//     router.push('/about/children')
//   }
// })





export default router
