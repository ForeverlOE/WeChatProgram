// packageA/pages/addAdress/addAdress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress_form: {
      username: null,
      usernumber: null,
      useradress: null,
      userStay: null,
      isDefaultAdress: false
    },

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
  onChange(event) {
    var index = event.currentTarget.dataset.index
    var comtent = event.detail
    if (index === 0) {
      this.setData({
        'adress_form.username': comtent
      })
    } else if (index === 1) {
      this.setData({
        'adress_form.usernumber': comtent
      })
    } else if (index === 2) {
      this.setData({
        'adress_form.useradress': comtent
      })
    } else if (index === 3) {
      this.setData({
        'adress_form.userStay': comtent
      })
    }
    this.setData({
      'adress_form.isDefaultAdress': false
    })
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
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  back() {
    var adress = this.data.adress_form
    if (adress.username != null && adress.useradress != null && adress.usernumber != null) {
      getApp().globalData.adressList.push(adress)
      wx.reLaunch({
        url: '../../../packageA/pages/adress/adress',
      })
    } else {
      wx.showToast({
        title: '请确认您是否已将必填信息填完整',
        icon: 'none',
        duration: 2000
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})