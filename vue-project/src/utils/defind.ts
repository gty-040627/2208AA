//登录
interface Login {
  mobile: string
  password: string
}

//首页推荐
interface about {
  type: string
  current: number
  pageSize: number
}

export { Login,about }
