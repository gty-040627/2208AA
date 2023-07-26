import http from "./http"
import * as TS from "../utils/defind"

//手机号密码登录
export const QueryLogin = (data:TS.Login)=>http.post('/login/password',data)
//首页推荐
export const QueryAbout = (params:TS.about)=>http.get('/patient/home/knowledge',{params})
//首页关注
export const QueryPages = (params:TS.pages)=>http.get('/home/page/doc',{params})
//首页饮食 
export const QueryFood = (params:TS.foods)=>http.get('/patient/home/knowledge',{params})
//首页关注已关注改变接口 /like
export const QueryLike = (id:TS.like)=>http.post('/like',id)
//问诊记录 
export const QueryList = (params:TS.list)=>http.get('/patient/consult/order/list',{params})

