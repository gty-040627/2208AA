// pages/options/options.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logins:{},
    checked: true,
  },
  //获取用户名
  GetLoginList(){
    let list =  wx.getStorageSync('LoginList')
    console.log(list,'list');
    this.setData({
      logins:list
    })
  },
  //开关
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  togoLogin(){
    wx.switchTab({
      url: '/pages/my/my',
    }) //改变登录状态
    wx.removeStorageSync('LoginList')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.GetLoginList()
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