Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#450003",
    /* 补全list数组 */
    list: [{
      pagePath: "/pages/yeo-loading/yeo-loading",
      iconPath: "/images/index.png",
      selectedIconPath: "/images/index-select.png",
      text: "首页"
    }, {
      pagePath: "/pages/yeo-card/yeo-card",
      iconPath: "/images/star.png",
      selectedIconPath: "/images/star-select.png",
      text: "空间"
    }, {
      pagePath: "/pages/yeo-icon/yeo-icon",
      iconPath: "/images/letter.png",
      selectedIconPath: "/images/letter-select.png",
      text: "信件"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})