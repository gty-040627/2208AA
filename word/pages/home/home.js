// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      {title: "装备",index: "0",},
      {title: "运动",index: "1",},
      {title: "电视",index: "3",},
      {title: "功能",index: "4",},
      {title: "功能",index: "5",},
      {title: "功能",index: "6",}
  ],
  tabsId: 0, //默认选型为装备
  },

   // 滑动时触发的事件
   slideOn(e) {
     console.log(e,'slideOn');
    // 拿到当前索引并动态改变
    this.setData({
        tabsId: e.detail.current
    })
}, 

//点击tab时触发
tabsOn(e) {
  console.log(e,'tabsOn');
    this.setData({
        //拿到当前索引并动态改变
        tabsId: e.currentTarget.dataset.idx
    })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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