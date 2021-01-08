// Yeo/OverlapFon/OverlapFon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 上层字体颜色
    abCol: {
      type: String,
      value: '#000000'
    },
    // 下层字体颜色
    blCol: {
      type: String,
      value: '#A5ADB5'
    },
    // 字体类型
    fonType: {
      type: String,
      value: 'olFon'
    },
    // 字体大小
    FonSize: {
      type: Number,
      value: 39 
    },
    // 位置
    udPosp: {
      type: String,
      value: 'center'
    },
    // 上下结构字体内容
    udFonConUp: {
      type: String,
      value: '友情链接'
    },
    udFonConDown: {
      type: String,
      value: 'Friends'
    },
    // 重叠字的字体内容
    olFonCon: {
      type: String,
      value: '友情提示'
    },
    // 重叠字的位置
    olFromLeft: {
      type: Number,
      value: 40
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
      this.setData({
        getudHeight: this.data.FonSize * 2
      })
      this.setData({
        getolHeight: this.data.FonSize + 12
      })
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
