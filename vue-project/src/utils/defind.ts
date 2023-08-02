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

// 科室

//问诊记录
interface list {
  type: number
  current: number
  pageSize: number
}

//删除订单
interface listDel {
  id: number
}

//继续沟通 去结账
interface detsil {
  orderId: string
}
//支付订单
interface pay {
  paymentMethod: string
  orderId: string
  payCallback: string
}

//支付页面
interface payList {
  type: number
  illnessType: number
}
interface payList2 {
  consultFlag: string
  couponId: string
  depId: string
  illnessDesc: string
  illnessTime: string
  illnessType: number
  patientId: string
  pictures: any
  type: number
}

export type { Login, about, pages, foods, like, list, listDel, detsil, pay, payList ,payList2 } 
