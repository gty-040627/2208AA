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
interface pages {
  current: number
  pageSize: number
}
//食品
interface foods {
  type: string
  current: number
  pageSize: number
}
//已关注为关注
interface like {
  id: string
  type: string
}

interface list {
  type: number
  current: number
  pageSize: number
}

export type { Login, about, pages, foods, like, list }
