Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 事件触发，调用接口
  nearby_search: function () {
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: 'kfc', //搜索关键词
      location: '30.98837,103.64662', //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        console.log(res.data);
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "../../images/code-db-onRemove.png", //图标路径
            width: 70,
            height: 70,
            rotate: 90,
            callout: {
              content: '我是你大爷的大爷',
              color: '#000000',
              bgColor: '#f2f2f2'
            },
            label: {
              content: '我是label',
              textAlign: 'center',
              padding: 10
            },
            polygons:[{
              points: [
                {latitude: 30.895912, longitude: 103.601591},
                {latitude: 34.895912, longitude: 104.601591},
                {latitude: 38.895912, longitude: 107.601591},
                // {latitude: 30.895912, longitude: 103.601591},
              ],
              strokeColor: '#DC143C'
            }]
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
        console.log(mks);
        
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },


  // 滑动
  setScrollLeft() {
    this.setData({
      sl: 200
    })
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