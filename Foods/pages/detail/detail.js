// pages/detail/detail.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    obj: {},
    num: 0,
    gloableData: wx.getStorageSync('gloableData') || []
  },
  //计步器++
  onChange() {
    this.data.num++
    this.setData({
      num: this.data.num
    })
  },
  //加入购物车
  add() {
    let {obj,num,gloableData} = this.data
    gloableData.push({
      ...obj,
      num: num,
      flag: false
    })
    wx.showToast({
      title: '加入购物车',
    })
    wx.setStorageSync('gloableData', gloableData)
  },
  //进入购物车页面
  tocar() {
    wx.switchTab({
      url: '/pages/car/car',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {obj} = this.data
    obj = JSON.parse(decodeURIComponent(options.obj))
    this.setData({
      obj
    })
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