// miniprogram/pages/yeo-comment/yeo-comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 评论数组数据 */
    commentArr: [{
        userImg: 'https://s3.ax1x.com/2021/03/09/63FF1O.jpg',
        headPendant: 7,
        userName: '人是非',
        content: '我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡',
        time: '2021-2-21'
      },
      {
        userImg: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg',
        headPendant: 3,
        userName: '陌生的兄弟',
        content: '楼上说的对',
        time: '2021-3-22'
      },
      {
        userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
        headPendant: 5,
        userName: '可爱的猫',
        content: '楼上说的有道理',
        time: '2021-1-05'
      },
    ],
    // 输入框输入内容
    inputContent: '',

    // 函数节流前一个判断时间
    preViousTime: 0
  },

  // 回车事件
  enterEvent(e) {
    // 获取输入内容
    let comment_cont = e.detail.comment_cont;
    if (comment_cont == '') {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
    } else {
      this.sendMsg(comment_cont);
    }
  },

  // 键盘输入事件
  inputEvent(e) {
    // 获取输入内容
    let input_cont = e.detail.realtime_comment;
    this.setData({
      inputContent: input_cont
    })
  },

  // 点击发送图片事件
  sendmessageEvent(e) {
    // 获取输入内容
    let input_cont = this.data.inputContent;
    if (input_cont == '') {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
    } else {
      this.sendMsg(input_cont);
    }
  },

  // 发送评论
  sendMsg(content) {
    // 获取以前的时间
    let preViousTime = this.data.preViousTime;
    // 获取当前时间
    let nowTime = new Date();
    // 获取评论对象
    let objInfo = {
      // 用户名
      userName: '荒野大道',
      // 头像挂件等级
      headPendant: 0,
      // 用户头像
      userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
    };
    // 限制用户评论间隔时长 5000ms
    if (nowTime - preViousTime >= 5000) {
      // 新建评论对象
      let newCont = {
        userName: objInfo.userName,
        headPendant: objInfo.headPendant,
        userImg: objInfo.userImg,
        content,
        time: nowTime.toDateString()
      };
      this.data.commentArr.push(newCont);
      this.setData({
        commentArr: this.data.commentArr,
        preViousTime: new Date(),
        initValue: '',
        inputContent: ''
      })
      wx.showToast({
        title: '发布成功',
      })
    } else {
      wx.showToast({
        title: '输入频繁，请稍后再试',
        icon: 'none'
      })
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