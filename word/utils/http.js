const baseUrl = 'https://www.lexuemiao.com/api/app';
const http = ({
  url,
  method = 'GET',
  data = {}
}) => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: baseUrl + url,
      method,
      data,
      success: (res => {
        resolve(res.data)
      }),
      fail: (error) => {
        reject(error)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export default http;