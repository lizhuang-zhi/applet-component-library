// Yeo/YeoStretch/YeoStretch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

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
    // 点击拉伸事件
    stretchClick(){
      if(this.data.isShow == false){
        this.setData({
          boxChange: {
            width: '90%',
            height: '1000rpx',
            bora: '30rpx',
            transi: '1s'
          },
          pic: {
            left: '86%',
            transi: '1s',
          },
          content: {
            show: 'block',
            transi: '2s'
          },
          isShow: true
        });
      }else {
        this.setData({
          boxChange: {
            width: '120rpx',
            height: '120rpx',
            bora: '50%',
            transi: '1s'
          },
          pic: {
            left: '20rpx',
            transi: '1s',
          },
          content: {
            show: 'none',
          },
          isShow: false
        })

      }
      
    }

  }
})
