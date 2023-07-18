import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
		children:[
			{
				path: "/user",
				name: "user",
				component: () => import( "../views/UserView.vue")
			},{
				path: "/roles",
				name: "roles",
				component: () => import( "../views/RolesView.vue")
			},{
				path: "/RightList",
				name: "RightList",
				component: () => import( "../views/RightList.vue")
			},{
				path: "/GoodsList",
				name: "GoodsList",
				component: () => import( "../views/GoodsList.vue")
			},{
				path: "/Categories",
				name: "Categories",
				component: () => import( "../views/Categories.vue")
			},{
				path: "/CategoriesList",
				name: "CategoriesList",
				component: () => import( "../views/CategoriesList.vue")
			},{
				path: "/OrdersView",
				name: "OrdersView",
				component: () => import( "../views/OrdersView.vue")
			},{
				path: "/ReportsView",
				name: "ReportsView",
				component: () => import( "../views/ReportsView.vue")
			}
		]
  },
  {
    path: "/about",
    name: "about",
    component: () => import( "../views/AboutView.vue")
  },{
		path: "/login",
    name: "login",
    component: () => import( "../views/LoginView.vue")
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
	let token = localStorage.getItem('token')
	if(token && to.path == '/login'){
		next('/')
	} else if(!token && to.path !== '/login'){
		next('/login')
	}else{
		next()
	}
})


export default router
