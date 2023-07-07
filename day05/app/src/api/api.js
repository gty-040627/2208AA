import http from '../../untils/httpRequest.js'

//封装登录接口
export const Querylogin = (options) =>
  http.post(http.adornUrl('/sys/login'), options).then((res) => res.data)

export const QueryUser = (options) =>
  http
    .get(http.adornUrl('/sys/user'), { params: options })
    .then((res) => res.data)
