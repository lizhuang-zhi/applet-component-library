// Yeo/HangSwing/HangSwing.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 摆动频率(数值越大，摆动越慢)
    swingSpeed: {
      type: Number,
      value: 1.5
    },
    // 图片地址
    imgUrl: {
      type: String,
      value: '../imgs/吊灯.png'
    },
    // 图片大小
    imgSize: {
      type: Number,
      value: 100
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件
    clickTap() {
      this.triggerEvent('clickevent',{});
    }  
  }
})
