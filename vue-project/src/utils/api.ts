import http from "./http"
import * as TS from "../utils/defind"

//手机号密码登录
export const QueryLogin = (data:TS.Login)=>http.post('/login/password',data)
//首页推荐
export const QueryAbout = (params:TS.about)=>http.get('/patient/home/knowledge',{params})



