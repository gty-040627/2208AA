import http from "../../utils/http"

// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 32948,
    category: {}, //侧边栏 
    GoodList: [],
    GoodList1: [],
    GoodList2: [],

  },

  //获取侧边栏
  Getcategory() {
    http({
      url: "/shop/goods/category/all"
    }).then((res) => {
      // console.log(res,'category');
      this.setData({
        category: res.data
      })
    })
  },
  //侧边栏点击事件
  Oncategory(e) {
    // console.log(e, 'eeee');
    this.setData({
      activeKey: e.target.dataset.id
    })
  },
  //获取右侧食品内容
  GetGoodList() {
    http({
      url: "/shop/goods/list"
    }).then((res => {
      // console.log(res,'goodlist');
      this.setData({
        GoodList: res.data
      })
      //进行数据截取，分为两个数组
      let array1 = this.data.GoodList.slice(0, 2)
      let array2 = this.data.GoodList.slice(2)
      this.setData({
        GoodList1:array1,
        GoodList2:array2
      })
      // console.log(this.data.GoodList1);
      // console.log(this.data.GoodList2);
    }))
  },
  //点击进入详情页面
  GoDetile(e){
    //  console.log(e,'58');
     let items = e.currentTarget.dataset.item
     wx.navigateTo({
       url: '/pages/detail/detail?obj='+JSON.stringify(items),
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.Getcategory()
    this.GetGoodList()
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