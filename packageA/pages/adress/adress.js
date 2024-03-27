// packageA/pages/adress/adress.js
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../../store/store'
Page({
  data: {
    adress_list: null,
    adress: {
      name: null,
      number: null,
      adress_xi: null
    },
    isDelete: false,
  },
  onLoad(options) {
    var centre_control = getApp().globalData.adress_centre
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['activeIndex'],
      actions: {
        updateActive: 'updateactiveIndex'
      }
    })
    this.setData({
      adress_list: getApp().globalData.adressList
    })
    if (this.data.adress_list != 0 && centre_control == 0) {
      this.give_chu_value()
      getApp().globalData.adress_centre += 1
    }
  },
  give_chu_value() {
    this.setData({
      'adress_list[0].isDefaultAdress': true
    })
  },

  onReady() {

  },
  onShow() {},
  back_list() {
    const adressList = this.data.adress_list;
      wx.switchTab({
        url: '../../../pages/list/list',
      })
  },
  add_adress() {
    this.updateActive(2)
    wx.reLaunch({
      url: '../../../packageA/pages/addAdress/addAdress',
    })
  },
  modify_adress(event) {
    var index = event.currentTarget.dataset.index
    wx.reLaunch({
      url: '../../../packageA/pages/modifyAdress/modifyAdress?index=' + index,
    })
  },
  onChange(event) {
    const index1 = event.currentTarget.dataset.index;
    const adressList = this.data.adress_list;
    for (let i = 0; i < adressList.length; i++) {
      if (i === index1) {
        adressList[i].isDefaultAdress = event.detail;
      } else {
        adressList[i].isDefaultAdress = false;
      }
    }
    this.setData({
      adress_list: adressList
    });
  },
  onHide() {

  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {},
  delete_adress(event) {
    var index = event.currentTarget.dataset.index
    var adressList = getApp().globalData.adressList
    adressList.splice(index, 1);
    wx.reLaunch({
      url: './adress',
    })
  }
})