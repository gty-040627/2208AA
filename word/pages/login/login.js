import http from "../../utils/http"

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: {
      mobile: '', //电话
      user_pass: "", //密码
      captcha: "", //图片验证码
      key: '', //图片的key  登录是要用到
      device_id: '1', //加上不用管
      device_type: '2' //加上不用管
    },
    img: '',
    LoginList:{}
  },
  //验证码
  getImg() {
    wx.request({
      url: 'https://www.lexuemiao.com/api/app/getImgCode',
      method: 'GET',
      success: (res) => {
        //  console.log(res,'img');
        this.setData({
          img: res.data.data.url.img,
          'from.key': res.data.data.url.key
        })
      }
    })
  },
  //验证码点击事件
  imgng() {
    this.getImg()
  },

  getPhone(e) {
    //  console.log(e,'eeee');
    this.setData({
      'from.mobile': e.detail.value
    })
  },
  getPassword(e) {
    //  console.log(e,'eeee');
    this.setData({
      'from.user_pass': e.detail.value
    })
  },
  getImgimg(e) {
    //  console.log(e,'eeee');
    this.setData({
      'from.captcha': e.detail.value
    })
  },

  //登录
  HeaderLogin() {
    //  console.log(this.data.from);
    wx.request({
      url: 'https://www.lexuemiao.com/api/app/login',
      method: "POST",
      data: this.data.from,
      success:(res)=>{
        console.log(res);
        this.setData({
          LoginList:res.data.data
        })
        wx.setStorageSync('LoginList', this.data.LoginList)
        if(res.data.code==200){
          wx.showToast({
            title: '登录成功',
          })
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
      }
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getImg()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})