// miniprogram/pages/yeo-horizon-slider/yeo-horizon-slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderArr: [{
        picUrl: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
        title: '怦然心动',
        description: '月亮将会奔你而来',
        picBorder: ''
      },
      {
        picUrl: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg',
        title: '傲慢与偏见',
        description: '以灵魂唤醒灵魂',
        picBorder: ''
      },
      {
        picUrl: 'https://s1.ax1x.com/2020/08/02/aYQfFx.jpg',
        title: '老人与海',
        description: '老人与海的固执',
        picBorder: ''
      },
      {
        picUrl: 'https://s1.ax1x.com/2020/08/02/aYlncF.jpg',
        title: '复仇者联盟',
        description: '以父之名论英雄',
        picBorder: ''
      },
    ]
  },


  // 点击事件
  clickObj(e) {
    // 监听触发目标
    console.log(e.detail.clickObj);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})