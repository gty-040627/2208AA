// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,
    info: '哈哈哈哈哈哈',
    listsss: '555555',
    username:'eee',
    list: [{
      mag: 'hello'
    }, {
      mag: "hello"
    }],
    randomNum: Math.random() * 10, //生成10以内的随机数
    randomNum2: Math.random().toFixed(2), //生成一个带两位小数的随机数
    count: 0,
    listdata:[
      {
        name:'张三',
        age:18
      },
      {
        name:'李四',
        age:20
      },
      {
        name:'王五',
        age:30
      },
    ]
  },
  //count++
  OnTop(e) {
    this.setData({
      count: this.data.count + 1
    })
    console.log(e, 'eee');
  },
  ggg(){
    wx.switchTab({
      url: '../index/index',
      complete:()=>{
        console.log("complete");
      },
      success:()=>{
        console.log('success');
      },fail:()=>{
        console.log('fail');
      }
    })
  },
  //input打印点击事件
  inputList(e) {
    console.log(e, 'input');
    console.log(e.detail.value, 'input');
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
    this.setData({
      count : 0
    })
    //下拉停止num++，变为0
    // wx.stopPullDownRefresh() 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('到底啦');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})