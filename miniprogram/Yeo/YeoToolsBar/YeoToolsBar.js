// Yeo/YeoToolsBar/YeoToolsBar.js
let tools = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 背景块圆角大小
    bordRadius: {
      type: Number,
      value: 15
    },
    // 动画展示距离(单位是px)
    movDistance: {
      type: Number,
      value: 52
    },

    /* 图标 */
    // 中心控制显示图标
    mainPic: {
      type: String,
      value: '../imgs/tools_main.png'
    },
    // 上图标
    upPic: {
      type: String,
      value: '../imgs/tools_index.png'
    },
    // 右上图标
    rightUpPic: {
      type: String,
      value: '../imgs/tools_relax.png'
    },
    // 右图标
    rightPic: {
      type: String,
      value: '../imgs/tools_cate.png'
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    fir_animation: {},
    sec_animation: {},
    thi_animation: {},
    isMoving: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 展示工具
    showTools() {
      // 获取传入动画距离值
      let DisMov = this.data.movDistance;

      let fir = tools.creatAnima();
      let sec = tools.creatAnima();
      let thi = tools.creatAnima();

      if (!this.data.isMoving) {
        fir.opacity(1).translate(0, -DisMov).step();
        sec.opacity(1).translate(DisMov, -DisMov).step();
        thi.opacity(1).translate(DisMov, 0).step();

        this.setData({
          fir_animation: fir.export(),
          sec_animation: sec.export(),
          thi_animation: thi.export(),
          isMoving: true
        })

      } else {
        fir.opacity(0).translate(0, 0).step();
        sec.opacity(0).translate(0, 0).step();
        thi.opacity(0).translate(0, 0).step();

        this.setData({
          fir_animation: fir.export(),
          sec_animation: sec.export(),
          thi_animation: thi.export(),
          isMoving: false
        })
      }

    }

  }
})