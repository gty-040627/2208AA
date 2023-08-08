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
//删除订单
export const QueryListDel = (id:TS.listDel)=>http.delete(`/patient/order/${id}`)
// 继续沟通
export const QueryListroom = (orderId:TS.detsil)=>http.get(`/patient/consult/order/detail/${orderId}`)
//查看处方
export const QueryListLookUrl = (id:number)=>http.get(`/patient/consult/prescription/${id}`)
//取消问诊
export const QueryListOrder = (id:number)=>http.put(`/patient/order/cancel/${id}`)
//图文详情
export const QueryListDetil = (orderId:TS.detsil)=>http.get(`/patient/consult/order/detail/?orderId=`+orderId)
//选择患者
export const QueryListUser = ()=>http.get('/patient/mylist')
//选择科室 
export const QueryAllDel = ()=>http.get('/dep/all')
//支付页面渲染
export const QueryPayList = ()=>http.get('/patient/consult/order/pre?type=2&illnessType=1')
//支付页面接口
export const getPay  =(id:number)=>http.get(`/patient/info/${id}`)
//患者信息删除
export const del = (id:number)=>http.delete(`/patient/del/${id}`)
//添加
export const QueryAddUser = (params:TS.Adduser)=>http.post('/patient/add',params)
//编辑
export const QueryUpdateUser = (params:TS.Adduser)=>http.put('/patient/update',params)


//问诊-支付页面接口(pay页面)
export const getPayList  =(data:TS.payList2)=>http.post('/patient/consult/order',data)


//添加支付支付接口
export const QueryPay = (data:TS.pay)=>http.post('/patient/consult/pay',data)


