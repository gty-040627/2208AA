Page({

  /**
   * 页面的初始数据
   */
  data: {
    navber: [],
    banner: [],
    gonggao: [],
    list: [],
    tabsId: 1, //默认选型为装备
  },
  //点击tab时触发
  tabsOn(e) {
    console.log(e,'eeee');
    this.setData({
      //拿到当前索引并动态改变
      tabsId: e.currentTarget.dataset.id
    })
  },
  slideOn(e) {
    // console.log(e,'slideOn');
    // 拿到当前索引并动态改变
    this.setData({
        tabsId: e.detail.current
    })
}, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //nav
    wx.request({
      url: 'https://www.lexuemiao.com/api/app/home/getSecondClassify/undefined',
      method: "GET",
      success: (res) => {
        // console.log(res,'res');
        this.setData({
          navber: res.data.data
        })
      }
    })
    //请求轮播图
    wx.request({
        url: 'https://www.lexuemiao.com/api/app/home/banner/1/4',
        method: "GET",
        success: (res) => {
          // console.log(res);
          this.setData({
            banner: res.data.data
          })
        }
      }),
      //公告
      wx.request({
        url: 'https://www.lexuemiao.com/api/app/home/liveToday/undefined',
        method: "GET",
        success: (res) => {
          // console.log(res);
          this.setData({
            gonggao: res.data.data
          })
        }
      }),
      //内容
      wx.request({
        url: 'https://www.lexuemiao.com/api/app/home/classifyCourse/1?page=1&limit=150&classify_id=1',
        method: 'GET',
        success: (res) => {
          console.log(res, 'res');
          this.setData({
            list: res.data.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})