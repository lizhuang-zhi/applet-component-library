// Yeo/YeoAnimaSearch/YeoAnimaSearch.js
let anima = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 搜索输入值
    bindvalue: {
      type: String,
      value: null
    },
    // 返回搜索结果数组
    searBackArr: {
      type: Array,
      value: null
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    spreadAndCancel: {},
    showInput: {},
    showCancel: {},
    showSearCon: {}

    
  },


  // 数据监听器
  observers: {
    'bindvalue': function() {
      this.EmitSearCont();
    }
  },

  lifetimes: {


  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 展开搜索
    spreadSearch() {
      let speard = anima.creatAnima(0,'ease',700);
      let show_input = anima.creatAnima(300,'ease',700);
      let show_cancel = anima.creatAnima(0,'ease',700);
      let show_input_con = anima.creatAnima();

      speard.width(200).step();
      show_input.left(40).opacity(1).step();
      show_cancel.left(160).opacity(1).step();
      show_input_con.width(90).height(23).step();

      this.setData({
        spreadAndCancel: speard.export(),
        showCancel: show_cancel.export(),
        showInput: show_input.export(),
        showInputCon: show_input_con.export()
      })
    },

    // 取消搜索
    cancelSearch() {
      let cancel = anima.creatAnima();
      let hidden_cancel = anima.creatAnima();
      let hidden_input = anima.creatAnima();
      let hidden_sear_con = anima.creatAnima(0,'ease',50);
      let hidden_input_con = anima.creatAnima();
      
      hidden_input.width(0).height(0).opacity(0).left(20).step();
      hidden_cancel.opacity(0).left(30).step();
      cancel.width(55).height(55).step();
      hidden_sear_con.opacity(0).step({
        delay: 50,
        timingFunction: 'ease',
        duration: 300
      }).width(0).height(0).step();
      hidden_input_con.width(0).height(0).step();
      this.setData({
        spreadAndCancel: cancel.export(),
        showCancel: hidden_cancel.export(),
        showInput: hidden_input.export(),
        showSearCon: hidden_sear_con.export(),
        showInputCon: hidden_input_con.export()
      })
    },

    // 传递实时搜索内容
    EmitSearCont() {
      this.triggerEvent('searcontevent',{
        searCont: this.data.bindvalue
      })
    },

    // 输入聚焦时触发
    focusInput() {
      let sprHegit = anima.creatAnima();
      let show_sear_con = anima.creatAnima();
      let show_line_con = anima.creatAnima();
    
      sprHegit.height(240).step();
      show_sear_con.width(199).height(176).step({
        duration: 500,
        timingFunction: 'ease',
        delay: 300
      }).opacity(1).step();
      show_line_con.opacity(1).step();
      
      this.setData({
        spreadAndCancel: sprHegit.export(),
        showSearCon: show_sear_con.export(),
        showConLine: show_line_con.export(),
        
      });
    }

  }
})
