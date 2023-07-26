import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/fast',
      name: 'fast',
      component: () => import('../views/FastView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/alldep',
      name: 'alldep',
      component: () => import('../views/AllDep.vue')
    },
   {
      path:'/home',
      name: 'home',
      redirect:'/home/about',
      component:()=>import('../views/Home.vue'),
      children:[
        {
          path:'my',
          name: 'my',
          component:()=>import('../views/MyView.vue')
        },{
          path:'about',
          name: 'about',
          component:()=>import('../views/AboutView.vue')
        },{
          path:'article',
          name: 'article',
          component:()=>import('../views/ArticleView.vue')
        },{
          path:'notify',
          name: 'notify',
          component:()=>import('../views/NotifyView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('token')
  if(token && to.path== '/login'){
      next('/my')
  }else if(!token && to.path !== '/login'){
      next('/login')
  }else{
      next()
  }
})


export default router
