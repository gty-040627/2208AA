import http from '../utils/httpRequest'
import * as TS from './defind'

//登录
export const qsueryLogin = (params: TS.RuleForm) => http.post('/login', params).then(res => res.data)
//用户首页
export const qsueryUserList = (params: TS.GetUser) => http.get('/users', { params }).then(res => res.data)
//用户添加接口
export const qsueryUserListAdd = (params: TS.AddForm) => http.post('/users', params).then(res => res.data)
//用户搜索
export const qsueryUserListSearch = (params: any) => http.get('/users', { params }).then(res => res.data)
//用户编辑回显
export const qsueryUserListLook = (id: any) => http.get(`/users?${id}`).then(res => res.data)
//用户编辑确认
export const qsueryUserListLookList = (data: TS.MeitForm) => http.put(`users/${data.id}`, data).then(res => res.data)
//用户删除
export const qsueryUserListDel = (id: any) => http.delete(`/users/${id}`).then(res => res.data)
//用户分配角色回填
export const qsueryUserListLook2 = (params: any) => http.get('/roles', { params }).then(res => res.data)



//角色列表首页
export const queryRoles = () => http.get('/roles').then(res => res.data)
//角色列表添加
export const queryRolesAdd = (params: TS.RolesAdd) => http.post('/roles', params).then(res => res.data)
//角色列表删除
export const queryRolesDel = (id: any) => http.delete(`/roles/${id}`).then(res => res.data)
//角色列表编辑
export const queryRolesMeit = (data: TS.RolesMeit) => http.put(`/roles/${data.roleId}`, data).then(res => res.data)
//分配权限列表 树状图
export const queryRolesTree = () => http.get('rights/tree').then(res => res.data)
//树状图添加
export const queryRightListAdd = (id: any) => http.post(`roles/${id}/rights`, id).then(res => res.data)
//树状图删除
export const queryRightListDel = (id: any) => http.delete(`roles/${id}/rights/${id}`, id).then(res => res.data)
//角色列表权限列表 首页
export const queryRightList = () => http.get('rights/list').then(res => res.data)


//商品列表首页
export const queryGoodsList = (params: TS.GoodsList) => http.get('/goods', { params }).then(res => res.data)
//删除
export const queryGoodsListDel = (goods_id: number) => http.delete(`/goods/${goods_id}`).then(res => res.data)
//编辑回填
export const queryGoodsListLook = (goods_id: any) => http.get(`/goods/${goods_id}`).then(res => res.data)
//编辑
export const queryGoodsListMeit = (data: any) => http.put(`/goods/${data.goods_id}`, data).then(res => res.data)
//搜索
export const queryGoodsListSearch = (params: TS.GoodsList) => http.get('/goods', { params }).then(res => res.data)
//添加
export const queryGoodsListAdd = (params: TS.GoodsList) => http.post('/goods', params).then(res => res.data)


//分类参数首页
export const queryCategories = () => http.get('/categories').then(res => res.data)


//商品分配首页
export const queryCategoriesList = (params:TS.CategoriesList2) => http.get('/categories',{params}).then(res => res.data)
//商品分配编辑
export const queryCategoriesMeit = (data:TS.CategoriesListMeit) => http.put(`/categories/${data.cat_id}`,data).then(res => res.data)
//商品分配删除
export const queryCategoriesDel = (cat_id:TS.CategoriesListMeit) => http.delete(`/categories/${cat_id}`).then(res => res.data)


//订单列表首页
export const queryOrders = (params:TS.OrderList) => http.get('/orders',{params}).then(res => res.data)
//物流信息接口
export const queryOrderskuaidi = () => http.get('/kuaidi/1106975712662').then(res => res.data)

