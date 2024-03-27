import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../../store/store'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    GoodList: null,
    color: {
      firts: "",
      second: ""
    },
    goods: {
      name: "",
      price: Number,
      buyNum: 0,
      buy:false,
      src:null,
      littleIntroduce:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['activeIndex'],
      actions: {
        updateActive: 'updateactiveIndex'
      }
    })
    this.setData({
      query: options
    })
    this.setData({
      GoodList: getApp().globalData.goodList
    })
    this.dingqibian()
  },
  dingqibian() {
    const time = setInterval(() => {
      const sixth = '0123456789abcdef';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += sixth[Math.floor(Math.random() * 16)];
      }
      let color1 = '#';
      for (let i = 0; i < 6; i++) {
        color1 += sixth[Math.floor(Math.random() * 16)];
      }
      this.setData({
        'color.firts': color,
        'color.second': color1
      })
    }, 1000)
  },
  buy() {
    if (this.data.goods.buyNum < 1) {
      let isDuplicate = getApp().globalData.goodList.some(item => {
        return item.name === this.data.query.name && item.price === this.data.query.price;
      });
      if (!isDuplicate) {
        this.setData({
          'goods.name': this.data.query.name,
          'goods.buyNum': this.data.goods.buyNum + 1,
          'goods.price': this.data.query.price,
          'goods.buy':this.data.query.buy,
          'goods.src':this.data.query.src,
          'goods.littleIntroduce':this.data.query.littleIntrocue
        })
        getApp().globalData.goodList.push(this.data.goods)
        wx.showToast({
          title: '加入购物车成功',
          duration:1000
        })
      }else{
        wx.showToast({
          title: '您已添加过该商品!',
          icon:'none',
          duration:1000
        })
      }
      this.setData({
        GoodList: getApp().globalData.goodList
      })
    }
   
  },
  buyCar() {
    this.updateActive(2),
      wx.switchTab({
        url: '../../../pages/list/list',
      })
  },
  yuyue() {
    wx.showModal({
      content: '是否立即付款',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '功能正在完善中-ing',
            icon: 'none',
            duration: 1000
          })
        } else if (res.cancel) {}
      }
    })

  },
  message_Waiter() {
    wx.showToast({
      title: '功能正在完善中-ing',
      icon: 'none',
      duration: 1000
    })
  },
  shop(){
    wx.showToast({
      title: '功能正在完善中-ing',
      icon: 'none',
      duration: 1000
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
  buyCarControl() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings()
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