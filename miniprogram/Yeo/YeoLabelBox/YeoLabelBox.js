// Yeo/YeoLabelBox/YeoLabelBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题文字
    titleWords: {
      type: String,
      value: 'Vue双向绑定'
    },
    // 浏览数
    looks: {
      type: String,
      value: 16668
    },
    // 浏览数大于10万的颜色（自动改变）
    looksGoodCol: {
      type: String,
      value: ''
    }
  },


  options: {
    multipleSlots: true
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
      if(this.data.looks > 99999){
        this.setData({
          looks: "10W+",
          looksGoodCol: "#5AB0AE"
        })
      }
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
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

  }
})
