const BaseUrl='https://api.it120.cc/noodles';
const http=({url,method="GET",data={}})=>{
    return new Promise((resolve,rejest)=>{
        wx.showLoading({
          title: '加载中',
        })
        wx.request({
          url: BaseUrl+url,
          data,
          method,
          success:(res)=>{
                resolve(res.data)
          },
          fail:(error)=>{
              rejest(error)
          },
          complete(){
              wx.hideLoading()
          }
        })
    })
}
export default http;