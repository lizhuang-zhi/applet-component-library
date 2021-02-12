// miniprogram/pages/yeo-anima-search/yeo-anima-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 双向绑定数据
    pageValue: ''
  },


  // 改变数据搜索内容
  changeSearCont(e) {
    if (e.detail.searCont) {
      // 获取实时搜索内容
      let searCon = e.detail.searCont;
      wx.request({
        url: 'https://yundingxikj.cn/weixin/search/' + searCon,
        success: res => {
          console.log(res.data);
          // 构建新数组，存入返回值
          let searArr = res.data.filter((value, index) => {
            return index < 3;
          }).map((value, index) => {
            let obj = {};
            obj.tit = value.articleTitle;
            obj.desc = value.articleSummary.substring(0,14);

            return obj;
          })

          this.setData({
            searArr: searArr
          })
        },
        fail: res => {
          wx.showToast({
            icon: 'none',
            title: '网络错误，请稍后再试',
          })
        }
      })
    } else {
      console.log('暂无搜索值');
    }

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