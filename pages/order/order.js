Page({
  data: {
    serviceList: [{
        name: "六人团队整理包",
        src: "https://wx4.sinaimg.cn/orj360/008De5utly1hno8iwy0s8j32j81weu0x.jpg",
        price: 2000,
        buy: true,
        introduceText: "提供2000元的六人团队整理服务，负责对指定地点进行精细化整理并且附带空间设计服务。服务流程包括接受客户需求、安排专人前往、完成整理和空间设计工作并反馈情况。如需了解更多或预约服务，请点击进入详细页了解服务细节！",
        littleIntroduce: "提供2000元的六人团队整理服务"
      },
      {
        name: "两人三小时整理包",
        src: "https://wx4.sinaimg.cn/orj360/008De5utly1hno8ix0vysj32jc1ws1ky.jpg",
        price: 288,
        buy: true,
        introduceText: "提供288元的两人三小时整理服务，负责对指定地点进行精细化整理，包括清扫垃圾等工作。服务流程包括接受客户需求、安排专人前往、完成整理工作并反馈情况。如需了解更多或预约服务，请点击进入详细页了解服务细节！",
        littleIntroduce: "提供288元的两人三小时整理服务"
      },
      {
        name: "一人一小时整理包",
        src: "https://wx2.sinaimg.cn/orj360/008De5utly1hno8ix3b62j31vl2i67wi.jpg",
        price: 40,
        buy: true,
        introduceText: "提供40元的一人一小时整理服务，负责对指定地点进行基础整理，包括清扫垃圾等工作。服务流程包括接受客户需求、安排专人前往、完成整理工作并反馈情况。如需了解更多或预约服务，请点击进入详细页了解服务细节！",
        littleIntroduce: "提供40元的一人一小时整体整理服务"
      },
      {
        name: "专家设计包",
        src: "https://wx2.sinaimg.cn/mw690/008De5utly1hnykyzpuqxj32j81x1kjl.jpg",
        price: 3500,
        buy: true,
        introduceText: "提供1500元的专家上门空间设计服务，负责对您家进行整体空间设计并进行对应设计实施工作，为您设计多维度富有层次感的居住环境。服务流程包括接受客户需求、专家上门对房间进行实地测绘、给出设计图纸、整理布局实施、反馈情况。如需了解更多或预约服务，请点击进入详细页了解服务细节！",
        littleIntroduce: "提供1500元的专家上门空间设计服务"
      },
    ],
    isStart: false,
    count: 0
  },
  changePictrue(isStart) {
    if (isStart) {
      let src1 = "https://wx4.sinaimg.cn/orj360/008De5utly1hno8iwy0s8j32j81weu0x.jpg"
      let src2 = "https://wx4.sinaimg.cn/orj360/008De5utly1hno8ix0vysj32jc1ws1ky.jpg"
      let src3 = "https://wx2.sinaimg.cn/orj360/008De5utly1hno8ix3b62j31vl2i67wi.jpg"
      let src4 = "https://wx2.sinaimg.cn/mw690/008De5utly1hnykyzpuqxj32j81x1kjl.jpg"
      this.setData({
        'serviceList[0].src': src1,
        'serviceList[1].src': src2,
        'serviceList[2].src': src3,
        'serviceList[3].src': src4
      })
    } else {
      let src1 = "https://wx4.sinaimg.cn/orj360/008De5utly1hno8iwyl9aj32jl1wmx6p.jpg"
      let src2 = "https://wx1.sinaimg.cn/orj360/008De5utly1hno8iwvebwj32jj1wpnpd.jpg"
      let src3 = "https://wx4.sinaimg.cn/orj360/008De5utly1hno8ix3094j31vk2i64qq.jpg"
      let src4 = "https://wx2.sinaimg.cn/mw690/008De5utly1hnykz55b53j32jf1wstze.jpg"
      this.setData({
        'serviceList[0].src': src1,
        'serviceList[1].src': src2,
        'serviceList[2].src': src3,
        'serviceList[3].src': src4
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

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
    if (this.data.count % 2 === 0) {
      this.setData({
        isStart: true
      })
    } else {
      this.setData({
        isStart: false
      })
    }
    this.changePictrue(this.data.isStart)
    this.data.count += 1

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})