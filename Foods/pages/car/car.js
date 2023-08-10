// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gloableData: wx.getStorageSync('gloableData') || [],
    flag: true,
    money: 0,
    checked: false,   ///复选框
    AllCheck: false,   ///全选复选框
  },
  //改变复选框
  onChange(event) {
    console.log(event);
    this.setData({
      checked: event.detail,
    });
  },
  //改变全选复选框
  onChange2(event) {
    console.log(event,'event');
    this.setData({
      AllCheck: event.detail,
    });
  },
  //编辑按钮
  complite() {
    this.setData({
      flag: !this.data.flag
    })
  },
  //删除
  del(e) {
    let {
      gloableData,
    } = this.data
    gloableData.splice(e.currentTarget.dataset.index, 1)
        
    wx.setStorageSync('gloableData', gloableData)
    this.setData({
      gloableData,
     
    })
    this.computed()
  },
  //vant删除
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close();
        });
        break;
    }
  },

  computed() {
    let {
      gloableData,
      money
    }=this.data
    money = 0
    gloableData.forEach(item => {
      money += item.originalPrice * item.num
    })
    this.setData({
      money
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {
      gloableData
    } = this.data
    gloableData = wx.getStorageSync('gloableData') || []
    this.setData({
      gloableData,
    })
    this.computed()
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
    let {
      gloableData
    } = this.data
    gloableData = wx.getStorageSync('gloableData') || []
    this.setData({
      gloableData,
    })
    this.computed()
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