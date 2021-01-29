// Yeo/YeoHorizonSliderV2/YeoHorizonSliderV2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 遍历数组数据
    sliderArr: {
      type: Array,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function() {
      setTimeout(()=>{
        this.setData({
          leftdistance: 70
        })
      },1200)
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    moving() {

    }
  }
})
