// index.js
import http from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bnner:[],
    nav:[],
    list:[],
    // data: wx.getStorageSync('data') || []
  },
  todetail(e){
      let {item}=e.currentTarget.dataset
      // console.log(item);
          wx.redirectTo({
            url: '/pages/detail/detail?obj='+encodeURIComponent(JSON.stringify(item)),
          })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bnnerlist()
    this.navlist()
    this.getlist()
  },
  bnnerlist(){
      http({
        url:'/banner/list'
      }).then(res=>{
          this.setData({
            bnner:res.data
          })
      })
  },
  navlist(){
      http({
        url:'/shop/subshop/list'
      }).then(res=>{
          console.log(res);
          this.setData({
            nav:res.data
          })
      })
  },
  getlist(){
        http({
            url:'/shop/goods/list?recommendStatus='+1,
            method:"POST"
        }).then(res=>{
            // console.log(res.data);
            this.setData({
              list:res.data
            })
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