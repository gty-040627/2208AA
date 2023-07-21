import http from "./http"
import * as TS from "./defind"

//登录
export const QueryLogin = (data:TS.Login)=>http.post('/login',data)
//渲染页面
export const QueryList = ()=>http.get('/getMyAccount')
//转账
export const QueryListMoney = (params:TS.ListMoney)=>http.post('/transferAccount' , params)
//明细
export const QuerygetRecord = (id:any)=>http.get(`/getRecord/${id}` )