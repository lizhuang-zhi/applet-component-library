// components/CircleCorner/CircleCorner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ImgBot: {
      type: String,
      value: '../imgs/上传.png'
    },
    ImgItem1: {
      type: String,
      value: '../imgs/交易所.png'
    },
    ImgItem2: {
      type: String,
      value: '../imgs/钱.png'
    },

  },

  // 启用插槽
  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 封装创建动画对象
    creatAniObj(delay, duration, timingFunction = 'linear', transformOrigin = '50% 50% 0') {
      return wx.createAnimation({
        delay,
        duration,
        timingFunction,
        transformOrigin
      });
    },
    // 切换显示
    toggleShow() {
      let animate = this.creatAniObj(0, 500);
      let animate_last = this.creatAniObj(0, 700);
      let animate_back = this.creatAniObj(100, 600);
      let animate_last_back = this.creatAniObj(0, 700);

      if (this.data.isShow == false) {
        animate_last.opacity(1).translate(0, -20).step()
        animate.opacity(1).translate(0, -10).step()
        this.setData({
          ani: animate.export(),
          ani_last: animate_last.export(),
          isShow: true
        })
      } else {
        animate_last_back.opacity(0).translate(0, 90).step()
        animate_back.opacity(0).translate(0, 45).step()
        this.setData({
          ani: animate_back.export(),
          ani_last: animate_last_back.export(),
          isShow: false
        })
      }
    },
    // 第一个图标点击事件
    clickItem_1() {
      console.log('我是第一个图标点击事件');
    },
    // 第二个图标点击事件
    clickItem_2() {
      console.log('我是第二个图标点击事件');
    },

  }
})