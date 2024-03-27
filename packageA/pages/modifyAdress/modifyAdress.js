Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress_form: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var index = options.index
    var adress_form_value = getApp().globalData.adressList[index]
    this.setData({
      adress_form: adress_form_value
    })
  },
  back() {
    wx.showModal({
      title: '修改完毕确认',
      content: '确认修改完毕了吗？',
      success: (res) => {
        if (res.confirm) {
          wx.reLaunch({
            url: '../adress/adress'
          })
        } else if (res.cancel) {}
      }
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
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})