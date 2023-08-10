// 给全局对象 Window 扩展一个属性 _AMapSecurityConfig
interface Window {
  _AMapSecurityConfig: {
    securityJsCode: string
  }
}

export { Window }