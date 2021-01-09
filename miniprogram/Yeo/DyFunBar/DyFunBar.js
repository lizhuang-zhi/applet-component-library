// Yeo/DyFunBar/DyFunBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 搜索框背景
    yeoBg: {
      type: String,
      value: 'rgb(240,240,240)' 
    },
    // 搜索框提示内容
    yeoPlaceholder: {
      type: String,
      value: 'Input Something'
    }

  },

  options: {
      multipleSlots: true
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
