let tools = {
  // 创建动画对象
  creatAnima(delay = 0,timFunc = 'ease',duration = 1000) {
    return wx.createAnimation({
      delay: delay,
      timingFunction: timFunc,
      duration: duration
    });
  },

  


  
}


module.exports = tools;

