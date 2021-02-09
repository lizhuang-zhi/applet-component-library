// Yeo/SimpleCard/SimpleCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片
    imgUrl: {
      type: String,
      value: '../imgs/introduce.jpg'
    },
    // 标题
    title: {
      type: String,
      value: '云顶犀开发社区'
    },
    // 内容
    description: {
      type: String,
      value: '致力于打造多元化生态系统'
    },
    // 背景颜色
    BackgroundColor: {
      type: String,
      value: 'orange'
    }
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
    // 点击图片
    clickPic() {
      this.triggerEvent('picevent',{name: '图片事件'},{});
    },

    // 点击其他地方事件
    clickMain() {
      this.triggerEvent('mainevent',{name: '其他事件'},{});
    }
  }
})
