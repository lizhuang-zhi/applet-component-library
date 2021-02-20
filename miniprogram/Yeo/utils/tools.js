let tools = {
  // 创建动画对象
  creatAnima(delay = 0,timFunc = 'ease',duration = 1000, transOrg = '50% 50% 0') {
    return wx.createAnimation({
      delay: delay,
      timingFunction: timFunc,
      duration: duration,
      transformOrigin: transOrg
    });
  },

  


  
}


module.exports = tools;

