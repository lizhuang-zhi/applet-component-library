Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛1'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛2'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛3'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛4'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛5'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛6'
      },
    ]
  },

  // 添加数据
  add() {
    let dataArr = this.data.dataArr;
    let newArr = [{
        content: '我是新数据，看好了1'
      },
      {
        content: '我是新数据，看好了2'
      },
      {
        content: '我是新数据，看好了3'
      },
      {
        content: '我是新数据，看好了4'
      },
      {
        content: '我是新数据，看好了5'
      },
      {
        content: '我是新数据，看好了6'
      },
    ];
    this.setData({
      dataArr: dataArr.concat(newArr)
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