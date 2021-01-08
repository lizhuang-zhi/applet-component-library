// 引入SDK核心类，js文件根据自己业务，位置可自行放置
var QQMapWX = require('../../map/qqmap-wx-jssdk');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'RHYBZ-VU4C3-5MC3F-3Q5S4-BSOFT-JQFQQ' // 必填
});

// miniprogram/pages/calculDistance/calculDistance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  getCenterLocation: function () {
    //获取当前位置
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude);
        console.log(res.longitude);
      }
    })
  },
  

  // 103.591692,30.888316
  // 103.594063,30.88716
  formSubmit(e) {
    
    var _this = this;
    //调用距离计算接口
    qqmapsdk.calculateDistance({
      mode: 'walking',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
      //from参数不填默认当前地址
      //获取表单提交的经纬度并设置from和to参数（示例为string格式）
      from: {
        latitude: 30.98837,
        longitude: 103.64662
      }, //若起点有数据则采用起点坐标，若为空默认当前地址
      to:[{
        latitude: 30.89722,
        longitude: 103.589787
      }], //终点坐标
      success: function (res) { //成功后的回调
        console.log(res);
        var res = res.result;
        var dis = [];
        for (var i = 0; i < res.elements.length; i++) {
          dis.push(res.elements[i].distance); //将返回数据存入dis数组，
        }
        _this.setData({ //设置并更新distance数据
          distance: dis
        });

        // if(res.result.elements[0].distance < 100000){
        //   console.log('我进入了区域内了');
          
        // }
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
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
    this.mapCtx = wx.createMapContext('myMap')
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