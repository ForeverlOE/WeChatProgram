// packageA/pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo: null,
    time: 15 * 60 * 1000,
    timeData: {
      minutes: 15,
      seconds: 60,
      littleSecods: 1000
    }
  },

  onClickLeft() {
    wx.switchTab({
      url: '../../../pages/telephone/telephone'
    })
  },
  buy() {
    wx.showModal({
      title: '立即支付',
      content: '确认支付吗？',
      complete: (res) => {
        if (res.cancel) {}
        if (res.confirm) {
          wx.showToast({
            title: '功能正在完善中-ing',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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