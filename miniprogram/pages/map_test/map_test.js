// miniprogram/pages/map_test/map_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    latitude: "24.47951",
    longitude: "118.08948",
    polygons: [
      {
        points: [
          {
            longitude: 117.265348,
            latitude: 38.907694
          }, 
          {
            longitude: 112.610832,
            latitude: 37.82133
          }, 
          {
            longitude: 113.125956,
            latitude: 35.944515
          },
          {
            longitude: 115.425619,
            latitude: 34.966053
          },
          {
            longitude: 117.062978,
            latitude: 36.585177
          }
        ],
        strokeWidth: 1,
        strokeColor: '#FF0000DD',
        fillColor: '#7cb5ec88'
      },
      {
        points: [
          {
            longitude: 111.818599,
            latitude: 34.707698
          }, 
          {
            longitude: 108.985415,
            latitude: 34.441382
          },
          {
            longitude: 107.771193,
            latitude: 33.120195
          },
          {
            longitude: 110.78835,
            latitude: 32.778928
          }
        ],
        strokeWidth: 1,
        strokeColor: '#FF0000DD',
        fillColor: '#7cb5ec88'
      }
    ]
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