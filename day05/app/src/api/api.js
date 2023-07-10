import http from '../../untils/httpRequest.js'

//封装登录接口
export const Querylogin = (options) =>
  http.post(http.adornUrl('/sys/login'), options).then((res) => res.data)

//加班离职接口
export const QueryAddWord = (options) =>
  http
    .get(http.adornUrl(`/employees/{id}/leave`), { params: options })
    .then((res) => res.data)
//请假调休接口
export const QueryLeaveOff = (options) =>
  http
    .get(http.adornUrl(`/employees/{id}/jobs`), { params: options })
    .then((res) => res.data)

//员工页面接口
export const QueryUser = (options) =>
  http
    .get(http.adornUrl('/sys/user'), { params: options })
    .then((res) => res.data)
//员工转正页面查看接口
export const QueryUserChange = (id) =>
  http.get(http.adornUrl(`/employees/${id}/positive`)).then((res) => res.data)

//员工查看页面查看接口
export const QueryUserLook = (id) =>
  http.get(http.adornUrl(`/sys/user/${id}`)).then((res) => res.data)

//组织架构页面接口
export const QueryDepartment = (options) =>
  http
    .get(http.adornUrl('/company/department'), { params: options })
    .then((res) => res.data)

//权限管理页面接口
export const QueryApply = (options) =>
  http
    .get(http.adornUrl('/sys/permission'), { params: options })
    .then((res) => res.data)
//权限管理添加接口
export const QueryAddApply = (options) =>
  http.post(http.adornUrl('/sys/permission'), options).then((res) => res.data)
//权限管理删除接口   不能使用
export const QueryDelApply = (options) =>
  http
    .delete(http.adornUrl('/sys/permission/{id}'), options)
    .then((res) => res.data)
//权限管理查看接口
export const QueryLookApply = (id) =>
  http.get(http.adornUrl(`sys/permission/${id}`)).then((res) => res.data)
//权限api查看接口
export const QueryLookApi = (id) =>
  http.get(http.adornUrl(`/sys/permission/${id}`)).then((res) => res.data)

//考勤首页接口
export const QueryCfgList = (options) =>
  http
    .get(http.adornUrl('/attendances'), { params: options })
    .then((res) => res.data.data)
