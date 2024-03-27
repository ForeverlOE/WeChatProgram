Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodList: [],
    total_price: 0,
    adressList: [],
    allChoose: true,
    drawIndex: 0,
    secondAllChoose: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      goodList: getApp().globalData.goodList
    })

    this.setData({
      adressList: getApp().globalData.adressList
    })
    this.queryAddress()
  },
  queryAddress() {
    var adressList = this.data.adressList
    for (var i = 0; i < adressList.length; i++) {
      if (adressList[i].isDefaultAdress) {
        this.setData({
          drawIndex: i
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      goodList: getApp().globalData.goodList
    })
    this.total_add()
  },
  goodNumControl_add: function (event) {
    var index = event.currentTarget.dataset.index
    var goods = this.data.goodList[index]
    if (goods.buyNum > 0) {
      goods.buyNum++;
    }
    this.setData({
      ["goodList[" + index + "].buyNum"]: goods.buyNum
    })
    this.total_add()
  },
  total_add() {
    var goodList = this.data.goodList
    var total_mmoney = 0;
    for (let i = 0; i < goodList.length; i++) {
      if (goodList[i].buy) {
        total_mmoney += (goodList[i].buyNum * goodList[i].price)
      }
    }
    this.setData({
      total_price: total_mmoney
    })
  },
  goodNumControl_reduce: function (event) {
    var index = event.currentTarget.dataset.index
    var goods = this.data.goodList[index]
    if (goods.buyNum === 1) {
      goods.buyNum--;
      this.total_add()
      this.data.goodList.splice(index, 1);
      this.setData({
        goodList: this.data.goodList
      })
      return
    }
    if (goods.buyNum > 1) {
      goods.buyNum--;
      this.setData({
        ["goodList[" + index + "].buyNum"]: goods.buyNum
      })
      this.total_add()
    }

  },
  add_adress() {
    wx.reLaunch({
      url: '../../packageA/pages/adress/adress',
    })
  },
  onChange(e) {
    var goodList = this.data.goodList
    this.setData({
      allChoose: e.detail
    })
    if (this.data.allChoose) {
      for (let i = 0; i < goodList.length; i++) {
        this.setData({
          ['goodList[' + i + '].buy']: true
        })
      }
    } else if (!this.data.allChoose) {
      for (let i = 0; i < goodList.length; i++) {
        this.setData({
          ['goodList[' + i + '].buy']: false
        })
      }
    }
    let isDuplicate = goodList.every(item => {
      return item.buy == true
    })
    this.setData({
      secondAllChoose: isDuplicate
    })
    this.total_add()
  },
  onChange1(event) {
    var goodList = this.data.goodList
    var index = event.currentTarget.dataset.index
    this.setData({
      ['goodList[' + index + '].buy']: event.detail
    })
    let isDuplicate = goodList.every(item => {
      return item.buy == true
    })
    this.setData({
      secondAllChoose: isDuplicate
    })
    if (isDuplicate) {
      this.setData({
        allChoose: true
      })
    }
    this.total_add()
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
  buy() {
    let goodList = this.data.goodList
    let isBuy = goodList.some(item => {
      return item.buy == true
    })
    if (isBuy) {
      wx.showModal({
        title: '支付',
        content: '是否确认支付吗？',
        complete: (res) => {
          if (res.cancel) {

          }
          if (res.confirm) {
            wx.showToast({
              title: '功能正在完善中-ing',
              icon: 'none',
              duration: 1000
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '请选择你需要购买的商品！',
        icon: 'none',
        duration: 1000
      })
    }
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