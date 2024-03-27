// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'
Page({
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    VIPifFalse: false,
    VIPcolor: "#808080",
  },
  bindViewTap(e) {
  },
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    const {
      nickName
    } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      actions: {
        updateActive: 'updateactiveIndex'
      }
    })
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const {
      avatarUrl
    } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onShow() {
    var ifVIP = getApp().globalData.isVIP
    this.setData({
      VIPifFalse: ifVIP
    })
    if (this.data.VIPifFalse) {
      this.setData({
        VIPcolor: "#FFD700"
      })
    }
  },
  addVIP(e) {
    if (e.currentTarget.dataset.color === "#808080") {
      wx.showModal({
        content: '是否开通我司的年卡VIP服务？',
        complete: (res) => {
          if (res.cancel) {

          }
          if (res.confirm) {
           wx.navigateTo({
             url: '../../packageA/pages/year/year',
           })()
          }
        }
      })
    }
  },
  onEixt() {
    this.setData({
      hasUserInfo: false
    })
    this.updateActive(0)
    wx.switchTab({
      url: '../index/index',
    })
  }
})