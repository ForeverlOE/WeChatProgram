// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  requestFun(){
    wx.request({
      url: 'https://404f-2408-8462-4f10-372c-1099-ba44-23b0-a799.ngrok-free.app/images/test.jpg', // 接口地址
      // data: {
      //   key1: 'value1',
      // }, // 请求参数
      // header: {
      //   'content-type': 'application/json' // 设置请求的 header
      // },
      method: 'GET', // 请求方法：GET/POST/PUT/DELETE等
      // dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      // responseType: 'text', // 响应的数据类型：text/arraybuffer
      success(res) {
        console.log(res.data); // 请求成功时的回调函数
      },
      fail(err) {
        console.error(err); // 请求失败时的回调函数
      }
    });
  }
})
