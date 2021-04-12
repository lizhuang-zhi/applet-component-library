# Yeo小程序组件使用文档

## Yeo组件使用步骤

1. 导入Yeo文件夹（将文件放置同page同层级）
2. 在app.json中导入组件路径

app.json

```json
  "usingComponents": {
    "yeo-search": "/Yeo/YeoSearch/YeoSearch",
    "yeo-anima-search": "/Yeo/YeoAnimaSearch/YeoAnimaSearch",
    "yeo-rotate": "/Yeo/YeoRotate/YeoRotate",
    "yeo-art-font": "/Yeo/YeoArtFont/YeoArtFont",
    "yeo-simple-card": "/Yeo/YeoSimpleCard/YeoSimpleCard",
    "yeo-hang-swing": "/Yeo/YeoHangSwing/YeoHangSwing",
    "yeo-tab-bar": "/Yeo/YeoTabBar/YeoTabBar",
    "yeo-tab-bar-item": "/Yeo/YeoTabBarItem/YeoTabBarItem",
    "yeo-dy-fun-bar": "/Yeo/YeoDyFunBar/YeoDyFunBar",
    "yeo-icon": "/Yeo/YeoIcon/YeoIcon",
    "yeo-card": "/Yeo/YeoCard/YeoCard",
    "yeo-category": "/Yeo/YeoCategory/YeoCategory",
    "yeo-categories": "/Yeo/YeoCategories/YeoCategories",
    "yeo-horizon-slider": "/Yeo/YeoHorizonSlider/YeoHorizonSlider",
    "yeo-horizon-slider-v2": "/Yeo/YeoHorizonSliderV2/YeoHorizonSliderV2",
    "yeo-label-box": "/Yeo/YeoLabelBox/YeoLabelBox",
    "yeo-stretch": "/Yeo/YeoStretch/YeoStretch",
    "yeo-tools-bar": "/Yeo/YeoToolsBar/YeoToolsBar",
    "yeo-blur-card": "/Yeo/YeoBlurCard/YeoBlurCard",
    "yeo-comment": "/Yeo/YeoComment/YeoComment",
    "yeo-message-card": "/Yeo/YeoMessageCard/YeoMessageCard",
    "yeo-loading": "/Yeo/YeoLoading/YeoLoading",
    "yeo-swiper": "/Yeo/YeoSwiper/YeoSwiper",
    "yeo-label-bar": "/Yeo/YeoLabelBar/YeoLabelBar",
    "yeo-tab-change": "/Yeo/YeoTabChange/YeoTabChange",
    "yeo-flow-waterfall": "/Yeo/YeoFlowWaterfall/YeoFlowWaterfall",
    "yeo-diary-box": "/Yeo/YeoDiaryBox/YeoDiaryBox",
    "yeo-text-box": "/Yeo/YeoTextBox/YeoTextBox",
    "yeo-flow-waterfall-box": "/Yeo/YeoFlowWaterfallBox/YeoFlowWaterfallBox",
    "yeo-stamp-text": "/Yeo/YeoStampText/YeoStampText"
  }
```

**在app.json中加入要使用组件的声明路径即可**

3. 在页面中引用组件名称标签，配置对应属性与事件

## yeo-categories与yeo-category（分类）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/21/yoBNQJ.png" style="zoom:80%;" />

### 描述

通过Vue构建组件的形式，将整个组件拆分为了两个块（YeoCategories组件与YeoCategory组件），用户可以根据自身需求，自定义传入分类样式中item个数与item的样子。

### 属性说明

* ==YeoCategories组件==

| 属性名        | 类型   | 默认值 | 说明       |
| ------------- | :----- | ------ | ---------- |
| paddingTop    | Number | 70     | 顶部内边距 |
| paddingSide   | Number | 95     | 左右内边距 |
| paddingBottom | Number | 40     | 顶部内边距 |

* ==YeoCategory组件==

| 属性名           | 类型    | 默认值                                    | 说明                   |
| ---------------- | :------ | ----------------------------------------- | ---------------------- |
| boxWidth         | String  | 250rpx                                    | 外框宽度               |
| isShowPic        | Boolean | true                                      | 是否显示左侧配图       |
| bgColor          | String  | \#948CFF                                  | 背景颜色               |
| picUrl           | String  | https://s3.ax1x.com/2021/03/09/63FkcD.png | 图片地址               |
| picSize          | Number  | 46                                        | 图片大小               |
| paddingLeftofPic | Number  | 30                                        | 图片距离框体左侧内边距 |
| boxRadius        | Number  | 32                                        | 框体圆角               |
| boxMarginBottom  | Number  | 38                                        | 框体底部外边距         |

### 插槽

* ==YeoCategories组件==

**YeoCategories组件**：内部只含有一个slot标签，供大家任意插入其他样式（当然你也不一定非要插入YeoCategory组件）

* ==YeoCategory组件==

```html
  <yeo-category picUrl='../../images/vuejs-line.png' bgColor='#F8A9FF'>
    <view slot='title'>Vue</view>
  </yeo-category>
```

### 使用示例

index.wxml

```html
<yeo-categories>
  <yeo-category picUrl='../../images/html.png'>
    <view slot='title'>HTML</view>
  </yeo-category>
  <yeo-category picUrl='../../images/css3.png' bgColor='#7CE8C1'>
    <view slot='title'>CSS</view>
  </yeo-category>
  <yeo-category picUrl='../../images/js.png' bgColor='#FD7C5A'>
    <view slot='title'>JavaScript</view>
  </yeo-category>
  <yeo-category picUrl='../../images/vuejs-line.png' bgColor='#F8A9FF'>
    <view slot='title'>Vue</view>
  </yeo-category>
</yeo-categories>
```

## yeo-art-font（艺术字体）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/21/yokNW9.png" style="zoom:75%;" />

### 描述

提供多种形式的字体供大家使用，根据自我喜好，调整字体大小、颜色、位置等。

### 属性说明

> **公共属性**

| 属性名  | 类型   | 默认值  | 说明                                                         |
| ------- | :----- | ------- | ------------------------------------------------------------ |
| fonType | String | olFon   | 字体类型(需要用户自行选择)：udFon 上下字，olFon 重叠字，worLineFon 字线字 |
| abCol   | String | #000000 | 上层字体颜色                                                 |
| blCol   | String | #A5ADB5 | 下层字体颜色                                                 |
| fonSize | Number | 39      | 字体大小                                                     |

> **上下字体独有参数**

| 属性名       | 类型   | 默认值   | 说明                                                 |
| ------------ | :----- | -------- | ---------------------------------------------------- |
| udPosp       | String | center   | 上下结构字的位置 center<居中> unset<未设置,默认靠左> |
| udFonConUp   | String | 上下字体 | 上层字体内容                                         |
| udFonConDown | String | UpDown   | 下层字体内容                                         |

> **重叠字体独有参数**

| 属性名     | 类型   | 默认值   | 说明                         |
| ---------- | :----- | -------- | ---------------------------- |
| olFonCon   | String | 重叠字体 | 重叠字的字体内容             |
| olFromLeft | Number | 40       | 重叠字的位置(距离左侧百分比) |

> **字线字体独有参数**

| 属性名            | 类型   | 默认值   | 说明                                                       |
| ----------------- | :----- | -------- | ---------------------------------------------------------- |
| worLineFonCon     | String | 字线字体 | 字线字的字体内容                                           |
| worLinePosp       | String | center   | 字线字的位置 center<居中> unset<未设置,默认靠左>           |
| wordWieight       | String | normal   | 字体内容粗细 normal正常、bold加粗、bolder更粗、lighter变细 |
| lineDistanceOfTop | Number | 1.3      | 底部线条距离字体顶部的距离：字体大小 * lineDistanceOfTop   |
| lineWidthOfScreen | String | 35%      | 底部线条宽度（屏幕百分比 or 具体数值<附带rpx>)             |
| lineHeight        | Number | 10       | 底部线条厚度                                               |
| lineColor         | String | #FFA82E  | 底部线条颜色                                               |
| lineLeftRadius    | Number | 10       | 底部线条左边圆角                                           |
| lineRightRadius   | Number | 10       | 底部线条右边圆角                                           |

### 使用示例

index.wxml

```html
<!-- 
  公共参数：
    fonType: 字体类型
    FonSize: 字体大小
    abCol: 上层字体颜色（默认值：#000000） 
    blCol: 下层字体颜色（默认值：#A5ADB5）   
-->

<!-- 
  上下结构字体

  独有参数：
    udFonConUp：上面内容
    udFonConDown：下面内容
    udPosp：位置（可选值：center<居中>、unset<未设置，默认值>）
-->
<yeo-art-font
fonType='udFon'
fonSize='80'
udPosp='unset'></yeo-art-font>

<!-- 
  重叠结构字体

  独有参数：
    olFonCon：内容
    olFromLeft：
      距离屏幕左边的百分比距离(默认值：40) <0~70最佳>
-->
<yeo-art-font
fonType='olFon'
olFromLeft='30'></yeo-art-font>

<!-- 
  字线结构的字体

  独有参数：
    worLineFonCon：内容
    worLinePosp：
      位置（可选值：center<居中，默认值>、unset<未设置>）
    更多参数，请查看文档！
-->
<yeo-art-font
fonType='worLineFon'
fonSize='40'
lineWidthOfScreen='32%'></yeo-art-font>
```

## yeo-icon（图标）

### 展示效果

![](https://s3.ax1x.com/2021/02/22/y7cgOO.png)

### 描述

Yeo图标，说实话，这组件我感觉封装了个寂寞，但是有总比没有好，后续会持续优化，各位见谅。

### 属性说明

| 属性名   | 类型   | 默认值                                    | 说明     |
| -------- | :----- | ----------------------------------------- | -------- |
| iconUrl  | String | https://s3.ax1x.com/2021/03/09/63FJBj.png | 图片地址 |
| IconSize | Number | 160                                       | 图片大小 |

### 使用示例

index.wxml

```html
<yeo-icon></yeo-icon>
```

## yeo-swiper（轮播图）

### 展示效果

![](https://s3.ax1x.com/2021/03/02/6kWGJU.png)

![](https://s3.ax1x.com/2021/03/02/6kWYz4.png)

### 描述

轮播组件，经过调整，笔者认为此结构与宽距都合适，所以开放属性有限。

### 属性说明

| 属性名           | 类型    | 默认值           | 说明                              |
| ---------------- | :------ | ---------------- | --------------------------------- |
| dataArr          | Array   | 轮播图背景图数组 | 背景图数组数据                    |
| swiperHeight     | Number  | 630              | 轮播框高度                        |
| swiperPaddingTop | Number  | 0                | 轮播框内部上边距                  |
| swiperPaddingBot | Number  | 0                | 轮播框内部下边距                  |
| swiperMarginTop  | Number  | 60               | 轮播框外部上边距                  |
| swiperMarginBot  | Number  | 30               | 轮播框外部下边距                  |
| itemWidth        | Number  | 420              | Item宽度                          |
| itemHeight       | Number  | 410              | Item高度                          |
| itemMarginTop    | Number  | 100              | Item的顶部外边距                  |
| bordRadius       | Number  | 30               | Item圆角大小                      |
| bgSize           | String  | cover            | Item背景图横纵比（contain、cover) |
| autoPlay         | Boolean | true             | 是否自动轮播                      |
| intervalTime     | Number  | 5000             | 轮播间隔时长                      |

* dataArr示例（默认值）

```js
    // 背景图数组数据
    dataArr: {
      type: Array,
      value: [{
          bgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg',
          title: 'Tomorr',
          time: '2021-1-5',
          isStar: false
        },
        {
          bgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg',
          title: 'Thor',
          time: '2021-2-13',
          isStar: false
        },
        {
          bgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105979147,3553146784&fm=26&gp=0.jpg',
          title: 'Red Coal',
          time: '2021-2-3',
          isStar: false
        }
      ]
    },
```

> 内部样式

| 属性名                   | 类型    | 默认值   | 说明                                      |
| ------------------------ | :------ | -------- | ----------------------------------------- |
| starBoxWidth             | Number  | 80       | 收藏框宽度                                |
| starBoxHeight            | Number  | 80       | 收藏框高度                                |
| starBoxBordRadius        | Number  | 35       | 收藏框圆角                                |
| starBoxBgColor           | String  | \#4C5F79 | 收藏框背景色                              |
| starTopWithOutBox        | Number  | -10      | 收藏框距离外部框顶距离                    |
| starRightWithOutBox      | Number  | 30       | 收藏框距离外部框右侧边缘距离              |
| starPicSize              | String  | 50%      | 收藏框内图标大小(屏幕占比or具体数值<rpx>) |
| bottomInfoBotWithOutBox  | Number  | 10       | 底部栏距离外部框底距离                    |
| bottomInfoLeftWithOutBox | Number  | 38       | 底部栏距离外部框左侧距离                  |
| timeFontSize             | Number  | 24       | 时间字体大小                              |
| timeLetterSpacing        | Number  | 1        | 时间字母间距                              |
| timeColor                | String  | \#A8A4AE | 时间颜色                                  |
| timeFontWeight           | String  | normal   | 时间字体粗度                              |
| titleFontSize            | Number  | 42       | 标题字体大小                              |
| titleColor               | String  | #F5F9FC  | 标题颜色                                  |
| titleFontWeight          | String  | bold     | 标题字体粗度                              |
| titleFontNum             | Number  | 8        | 显示标题文字数量                          |
| isShowStarPic            | Boolean | true     | 是否显示收藏图标                          |

### 事件

| 事件名            | 事件描述             | 组件返回页面数据 | 返回数据类型 | 返回数据说明            |
| ----------------- | -------------------- | ---------------- | ------------ | ----------------------- |
| bind:clickevent   | 监听点击（Item）事件 | index            | Number       | 返回点击swiper-item索引 |
| bind:sendarrevent | ==监听组件毁灭事件== | dataArr          | Array        | 返回改动后的dataArr     |

### 使用示例

index.wxml

```html
<yeo-swiper></yeo-swiper>
```

## yeo-tab-change（tab切换）

### 展示效果

<img src="https://s3.ax1x.com/2021/03/07/6MEaH1.png" style="zoom:70%;" />

### 描述

tab切换组件，为开发者提供在单页面的切换功能，开发者可根据自身需求对组件进行样式调整

### 属性说明

| 属性名            | 类型    | 默认值                           | 说明                    |
| ----------------- | :------ | -------------------------------- | ----------------------- |
| isFixed           | Boolean | false                            | 是否固定位置            |
| fixedTop          | Number  | 0                                | 固定位置top值           |
| boxPaddingTop     | Number  | 60                               | 组件框顶部内边距        |
| bgColor           | String  | #eeeeee                          | 背景色                  |
| zIndex            | Number  | 199                              | 组件框层级              |
| titleArr          | Array   | ["首页", "商城", "动态", "我的"] | 传入标题数组            |
| currentIndex      | Number  | 0                                | 当前tab索引             |
| tabWidth          | String  | 100%                             | tab框宽度               |
| tabJustiContent   | String  | space-around                     | tab布局方式             |
| tabMargin         | String  | 0 0 20rpx 0                      | tab外边距               |
| fontSize          | Number  | 32                               | 字体大小                |
| fontColor         | String  | \#CBCBCB                         | 字体颜色(未选中时)      |
| fontSelectColor   | String  | \#FCFCFC                         | 字体tab选中时颜色       |
| fontWeight        | String  | bold                             | 字体粗细                |
| fontLetterSpacing | Number  | 5                                | 词组字间距              |
| fontZIndex        | Number  | 10                               | 字体层级                |
| lineWidth         | Number  | 80                               | 下划线宽度              |
| lineHeight        | Number  | 20                               | 下划线高度              |
| lineColor         | String  | \#EC625C                         | 下划线颜色              |
| lineBordRadius    | Number  | 20                               | 下滑线圆角              |
| lineBottom        | Number  | -5                               | 下滑线距离tab框底部距离 |
| lineZIndex        | Number  | 1                                | 下划线层级              |
| lineLeft          | Number  | -2                               | 下划线左距离            |

### 事件

| 事件名              | 事件描述        | 组件返回页面数据 | 返回数据类型 | 返回数据说明      |
| ------------------- | --------------- | ---------------- | ------------ | ----------------- |
| bind:changetabevent | 监听切换tab事件 | tabIndex         | Number       | 返回点击tab的索引 |

### 使用示例

index.wxml

```html
<view class="box">
  <yeo-tab-change></yeo-tab-change>
</view>
```

index.wxss

```css
.box{
  padding-top: 50rpx;
  height: 1300rpx;
  background: #151515;
}
```

## yeo-label-bar（标签切换页）

### 展示效果

<img src="https://s3.ax1x.com/2021/03/07/6MVXsH.png" style="zoom:67%;" />

### 描述

通过将yeo-tab-change组件与swiper原生组件相结合，通过数据绑定、数据监听、事件监听等方式结合而成，对于yeo-tab-change组件的部分属性可直接查看yeo-tab-change组件（**部分：指除开我没写的部分**）

### 属性说明

| 属性名                     | 类型         | 默认值                           | 说明                                                         |
| -------------------------- | :----------- | -------------------------------- | ------------------------------------------------------------ |
| tabOutMargin               | String       | 40rpx 0 0 0                      | tab外框外边距                                                |
| tabContHeight              | Number       | 270                              | ttab内容高度                                                 |
| tabContColor               | String       | \#F6F6F6                         | tab内容框背景颜色                                            |
| tabMargin                  | String       | 20rpx 10rpx 0                    | tab内容框外边距                                              |
| tabBordRadius              | Number       | 10                               | tab内容框圆角                                                |
| tabIsScrollY               | Boolean      | false                            | tab内容是否可垂直滚动                                        |
| tabScrollHeight            | Number       | 200                              | tab内容滚动的可视高度（当tab内容高度 > 此高度时，可看到滚动效果） |
| *以下为yeo-tab-change部分* | ------------ | -------------------------------- | ------------------------------------                         |
| tabArr                     | Array        | ["Yeo", "听听", "推荐"]          | TabChange数组                                                |
| tabChangeWidth             | String       | 100%                             | TabChange框宽度                                              |
| tabChangeJustiContent      | String       | space-around                     | TabChange布局方式                                            |
| currentTab                 | Number       | 0                                | 初始化显示tab页面的索引                                      |

==其余没有写到的关于yeo-tab-change属性，都是可直接调用的同名属性！！==

### 使用示例

index.wxml

```html
<yeo-label-bar tabArr='{{tabArray}}' currentTab='1' tabContHeight='{{maxHeight}}'>
  <view slot='{{tabArray[0]}}' class="tab-1">
    <view>{{tabArray[0]}}</view>
    <view>{{tabArray[0]}}</view>
    <view>{{tabArray[0]}}</view>
    <view>{{tabArray[0]}}</view>
    <view>{{tabArray[0]}}</view>
    <view>{{tabArray[0]}}</view>
  </view>
  <view slot='{{tabArray[1]}}' class="tab-2">
    <view>{{tabArray[1]}}</view>
    <view>{{tabArray[1]}}</view>
    <view>{{tabArray[1]}}</view>
  </view>
  <view slot='{{tabArray[2]}}' class="tab-3">
    <view>{{tabArray[2]}}</view>
    <view>{{tabArray[2]}}</view>
    <view>{{tabArray[2]}}</view>
    <view>{{tabArray[2]}}</view>
  </view>
</yeo-label-bar>
```

index.js

==其中演示的 TabInit() 方法非常重要，开发者只需要修改其中的选择器（.tab-1、.tab-2、.tab-3），就可以直接套用此方法，只是需要注意 *tools* 变量的相对路径==

```js
// 1.这里的路径是相对于我的文件来说（开发者需要自行更改)
let tools = require('../../Yeo/utils/tools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArray: ['Yeo', '我的', '动态']
  },

  // 2.初始化tab页面高度
  TabInit() {
    // 新建数组
    let tabHeiArr = [];
    // 声明异步函数
    new Promise((resolve, reject) => {
      /* 
        分别获取每个tab页的内容高度
        .tab-1 .tab-2 .tab-3 都是选择器
      */
      tools.selectHeight('.tab-1').then(back => {
        tabHeiArr.push(back);
      });
      tools.selectHeight('.tab-2').then(back => {
        tabHeiArr.push(back);
      });
      tools.selectHeight('.tab-3').then(back => {
        tabHeiArr.push(back);
        // 获取完成改变Promise状态
        resolve('success');
      });
    }).then(res => {
      let newArr = tabHeiArr.sort((a, b) => a - b);
      // 最大高度
      let maxHeight = newArr[tabHeiArr.length - 1];
      this.setData({
        maxHeight: maxHeight * 2
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化tab高度
    this.TabInit();
  },
    
})
```

## yeo-blur-card（滤镜卡片）

### 展示效果

![](https://s3.ax1x.com/2021/02/23/yLrUR1.png)

### 描述

在描述文字背景处添加模糊滤镜的效果，增加用户观感。同时支持开发者对组件各个部位进行调节。

### 属性说明

| 属性名            | 类型   | 默认值                                                       | 说明                                                         |
| ----------------- | :----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| description       | String | 大家好，我是Mr.KLeo，一名正在学习前端的Person。热爱技术，热爱交流，热爱生活。擅长使用Vue、JavaScript、HTML、CSS、Yeo-components开发可复用的视图组件，希望与你共同进步！ | 描述信息                                                     |
| buttonContent     | String | 按钮                                                         | 按钮文字                                                     |
| bgImgUrl          | String | https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2164794023,1537310268&fm=26&gp=0.jpg | 背景图地址（这里的地址是不支持相对路径的）                   |
| bgBordRadius      | Number | 20                                                           | 背景框圆角                                                   |
| bgWidth           | Number | 600                                                          | 背景框宽度                                                   |
| bgHeight          | Number | 600                                                          | 背景框高度                                                   |
| bgSize            | String | cover                                                        | 背景图展示形式(cover集中 contain全包含)                      |
| blurWidth         | String | 86%                                                          | 模糊框宽度(屏幕百分比or数值<带上单位rpx>)                    |
| blurHeight        | String | 86%                                                          | 模糊框高度(屏幕百分比or数值<带上单位rpx>)                    |
| blurPadding       | String | 30rpx                                                        | 模糊框内边距(这里你可以按照padding的规范填写)： '20rpx 40rpx'；'40rpx 30rpx 20rpx'； '40rpx 30rpx 20rpx 10rpx' |
| blurBordRadius    | Number | 30                                                           | 模糊框圆角                                                   |
| contentBordRadius | Number | 10                                                           | 文字框圆角                                                   |
| contentSize       | Number | 30                                                           | 文字框内文字大小                                             |
| contentColor      | String | #2D4235                                                      | 文字颜色                                                     |
| btnColor          | String | rgba(255, 255, 255, 0.8)                                     | 按钮文字颜色                                                 |

### 事件

| 事件名        | 事件描述         | 组件返回页面数据 | 返回数据类型 | 返回数据说明 |
| ------------- | ---------------- | ---------------- | ------------ | ------------ |
| bind:btnevent | 监听点击按钮事件 | content          | String       | 返回文字内容 |

### 使用示例

index.wxml

```html
<view class="box">
  <yeo-blur-card></yeo-blur-card>
</view>
```

index.wxss

```css
.box {
  margin: 60rpx auto;
}
```

## yeo-message-card（留言卡片）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/25/yvTXnK.png" style="zoom:80%;" />

### 描述

评论组件，支持两种模式（暗黑模式与白天模式），除此之外，开发者可通过传入等级（1-7），为用户设定不同级别的头像挂件（如上图）

### 属性说明

| 属性名            | 类型   | 默认值                                                       | 说明                                                         |
| ----------------- | :----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| cardBotMargin     | Number | 30                                                           | 底部外边距                                                   |
| userImg           | String | https://s3.ax1x.com/2021/03/09/63FUNq.jpg                    | 用户头像                                                     |
| headPendant       | Number | 1                                                            | 头像挂件：从1-7级，级数越高，挂件越靓；小于1，默认不佩戴挂件；大于7，默认第7级 |
| userName          | String | 仙秩                                                         | 用户名                                                       |
| userNameColor     | String | #555555                                                      | 用户名颜色                                                   |
| userNameSize      | Number | 28                                                           | 用户名字体大小                                               |
| time              | String | 2020-02-20                                                   | 时间                                                         |
| timeColor         | String | #555555                                                      | 时间颜色                                                     |
| timeSize          | Number | 22                                                           | 时间字体大小                                                 |
| content           | String | 我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡 | 评论内容                                                     |
| contentColor      | String | \#222222                                                     | 评论内容颜色                                                 |
| contentSize       | Number | 30                                                           | 评论内容字体大小                                             |
| contentLetSpacing | Number | 2                                                            | 评论内容字间距                                               |
| lineColor         | String | \#bbbbbb                                                     | 下划线颜色                                                   |
| contentPaddingBot | Number | 45                                                           | 下划线与内容距离                                             |
| ==model==         | String | white                                                        | 设置模式（dark暗黑模式与white白天模式）：设置模式的同时也设置了模式内的值，此时我们对于开发者设置的部分予以保留<暗黑模式最适背景色：#272727；白天模式最适背景色：#EBEBEB> |

### 事件

| 事件名            | 事件描述         | 组件返回页面数据 | 返回数据类型 | 返回数据说明                       |
| ----------------- | ---------------- | ---------------- | ------------ | ---------------------------------- |
| bind:userimgclick | 监听点击头像事件 | obj              | Object       | 包含用户名、用户头像url            |
| bind:contentclick | 监听点击内容事件 | obj              | Object       | 包含用户名、发布时间、用户评论内容 |

### 使用示例

index.wxml

```html
<view class="box">
  <view class="inner">
    <yeo-message-card headPendant='0' userImg='../imgs/YHS-2.jpg'></yeo-message-card>
    <yeo-message-card headPendant='3' userImg='../imgs/YHS-3.jfif' content='文件来对本页面的窗口表现进行配置。'></yeo-message-card>
    <yeo-message-card headPendant='4' userImg='../imgs/YHS-2.jpg' content='在支持云调用的接口文档中，会分别列出 HTTPS 调用的文档及云调用的文档，云调用文档同 HTTPS 调用文档一样包含请求参数、返回值及示例。'></yeo-message-card>
    <yeo-message-card headPendant='5' content='小程序根目录下的 app.json 文件用来对微信小程序进行全局配置'></yeo-message-card>
    <yeo-message-card headPendant='7' userImg='../imgs/YHS-1.jpg'></yeo-message-card>
    <yeo-message-card headPendant='8' content='接口获得临时登录凭证 code 后传到开发者服务器'></yeo-message-card>
  </view>
</view>
```

index.wxss

```css
.box {
  width: 100%;
  height: 1600rpx;
  background: #272727;
}
.inner {
  padding: 50rpx 30rpx 0;
}
```

## yeo-loading（加载动画）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/27/6S0ZjA.png" style="zoom:80%;" /><img src="https://s3.ax1x.com/2021/02/27/6S0mnI.png" style="zoom:80%;" />

### 描述

加载动画组件，开发者可改变背景覆盖色、加载点的大小、圆角、颜色等。

### 属性说明

| 属性名          | 类型    | 默认值                   | 说明                                              |
| --------------- | :------ | ------------------------ | ------------------------------------------------- |
| isShowLoading   | Boolean | true                     | 是否显示Loading                                   |
| loadingBgColor  | String  | rgba(230, 230, 230, 0.7) | Loading背景颜色(传入rgba才可以实现透视遮盖层效果) |
| loadingTop      | String  | 40%                      | Loading在页面位置（百分比or具体数值<带rpx>高度）  |
| dotColor        | String  | \#1B76FF                 | 加载点颜色                                        |
| dotNum          | Number  | 3                        | 加载点个数                                        |
| dotSize         | Number  | 26                       | 加载点大小                                        |
| dotBordRadius   | Number  | 8                        | 加载点圆角(数值越大，dot越圆)                     |
| dotMarginSize   | Number  | 10                       | 加载点之间左右间距                                |
| dotShowDuration | Number  | 500                      | 加载点之间出现间隔时长(ms)                        |

### 使用示例

index.html

```html
<!-- loading组件 -->
<yeo-loading isShowLoading='{{isShowLoading}}'></yeo-loading>

<!-- 模拟数据请求 -->
<view>我就是个摆设</view>
<view style="height: 500rpx;">
  <view wx:for="{{arr}}" wx:key='index'>
    <view style="height: 100rpx;width: 200rpx;">
      {{item}}
    </view>
  </view>
</view>
<view>我就是个摆设</view>
```

index.js

```js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    isShowLoading: true,
    arr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 模拟数据加载过程
    setTimeout(()=>{
      this.setData({
        isShowLoading: false,
        arr: [123,23,454,4534,345]
      })
    },2000);
  },
    
})  
```

## yeo-search（搜索栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/22/y7WsED.png" style="zoom:80%;" />

### 描述

搜索组件，开发者可根据爱好对搜索图标，占位文字进行更改，其次也可以根据自己需求对图标，输入框的位置与搜索框整体的大小进行更改。

### 属性说明

| 属性名           | 类型   | 默认值                                    | 说明           |
| ---------------- | :----- | ----------------------------------------- | -------------- |
| searchImg        | String | https://s3.ax1x.com/2021/03/09/63FAje.png | 搜索图标       |
| placeholder      | String | Input Something                           | 占位文字       |
| background       | String | rgb(250,250,250)                          | 背景颜色       |
| searBordRadius   | Number | 60                                        | 搜索框圆角     |
| topPadding       | Number | 12                                        | 上内边距       |
| bottomPadding    | Number | 12                                        | 下内边距       |
| leftPadding      | Number | 30                                        | 左内边距       |
| rightPadding     | Number | 30                                        | 右内边距       |
| inputLeftMargin  | Number | 16                                        | 输入框左外边距 |
| inputRightMargin | Number | 30                                        | 输入框右外边距 |
| inputType        | String | text                                      | 输入内容类型   |
| initValue        | String | 我是起始内容                              | 输入的起始内容 |

* inputType属性的适用值

| 适用值 | 说明               |
| ------ | ------------------ |
| text   | 文本输入键盘       |
| number | 数字输入键盘       |
| idcard | 身份证输入键盘     |
| digit  | 带小数点的数字键盘 |

### 事件

**返回数据说明：具体内容请查看**

[input事件相关数据]: https://developers.weixin.qq.com/miniprogram/dev/component/input.html

| 事件名                         | 事件描述                   | 组件返回页面数据 | 返回数据类型 | 返回数据说明       |
| ------------------------------ | -------------------------- | ---------------- | ------------ | ------------------ |
| bind:inputevent                | 监听键盘输入事件           | obj              | Object       | 输入内容等相关数据 |
| bind:focusevent                | 监听输入框聚焦事件         | obj              | Object       | 输入内容等相关数据 |
| bind:blurevent                 | 监听输入框失去焦点事件     | obj              | Object       | 输入内容等相关数据 |
| bind:confirmevent              | 监听输入框点击完成按钮事件 | obj              | Object       | 输入内容等相关数据 |
| bind:keyboardheightchangeevent | 监听键盘高度变化事件       | obj              | Object       | 输入内容等相关数据 |

### 使用示例

index.html

```html
<view class="search">
  <yeo-search></yeo-search>
</view>
```

index.wxss

```css
.search {
  margin: 40rpx auto 30rpx;
  width: 600rpx;
}
```

## yeo-rotate（旋转的餐盘）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/20/yIu6pD.png" style="zoom:67%;" /><img src="https://s3.ax1x.com/2021/02/20/yIu5AP.png" style="zoom:73%;" />

### 描述

在紫色餐桌上左右滑动，即可切换餐盘，更换不同的美食哟！

### 属性说明

| 属性名       | 类型   | 默认值             | 说明                                                         |
| ------------ | :----- | ------------------ | ------------------------------------------------------------ |
| roundBgColor | String | rgb(157, 157, 202) | 圆桌背景                                                     |
| roundSize    | Number | 0                  | 圆桌大小(0~50最佳)                                           |
| vegtArr      | Array  | 4张图片路径数组    | 传入旋转餐盘数组数据（暂时固定取四个元素）；少于四个：传入默认数组，多于四个：获取传入数据前四个元素 |

* vegtArr

```js
    /* 
      传入旋转数据（暂时固定取四个元素）
      少于四个：传入默认数组
      多于四个：获取传入数据前四个元素
    */
    vegtArr: {
      type: Array,
      value: [
        'https://s3.ax1x.com/2021/03/09/63F1gS.png',
        'https://s3.ax1x.com/2021/03/09/63F3jg.png',
        'https://s3.ax1x.com/2021/03/09/63FYHs.png',
        'https://s3.ax1x.com/2021/03/09/63FJBj.png'
      ]
    }
```



### 事件

| 事件名         | 事件描述         | 组件返回页面数据 | 返回数据类型 | 返回数据说明           |
| -------------- | ---------------- | ---------------- | ------------ | ---------------------- |
| bind:itemevent | 监听点击对象事件 | obj              | Object       | 点击餐盘返回的单一对象 |

### 使用示例

index.wxml

```html
<yeo-rotate></yeo-rotate>
```

## yeo-anima-search（动画搜索）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/12/yDR00J.png" style="zoom:67%;" /><img src="https://s3.ax1x.com/2021/02/12/yDRst1.png" style="zoom:57%;" /><img src="https://s3.ax1x.com/2021/02/12/yDRg1K.png" style="zoom: 50%;" />

### 描述

附带动画效果的实时性搜索组件

### 属性说明

| 属性名         | 类型   | 默认值   | 说明                   |
| -------------- | :----- | -------- | ---------------------- |
| bindvalue      | String | null     | 搜索输入值             |
| searBackArr    | Array  | null     | 返回搜索结果数组       |
| lineWidth      | Number | 330      | line长度               |
| titFont        | Number | 28       | 搜索内容标题大小       |
| descFont       | Number | 23       | 搜索内容描述大小       |
| horizonWidth   | Number | 200      | 横向展开宽度（px）     |
| perpendHeight  | Number | 260      | 垂直展开高度（px）     |
| cancelMovRight | Number | 160      | 取消叉图右移距离（px） |
| inputMovRight  | Number | 40       | 输入框右移距离（px）   |
| inputWidth     | Number | 90       | 输入框宽度（px）       |
| boxBgColor     | String | \#FFFFFF | 搜索框背景颜色         |

### 事件

| 事件名               | 事件描述             | 组件返回页面数据 | 返回数据类型 | 返回数据说明             |
| -------------------- | -------------------- | ---------------- | ------------ | ------------------------ |
| bind:getsearobjevent | 监听点击对象事件     | clickObj         | Object       | 点击搜索中返回的单一对象 |
| bind:searcontevent   | 改变数据搜索内容事件 | searCont         | String       | 返回实时搜索内容         |

### 使用示例

index.wxml

```html
<yeo-anima-search model:bindvalue="{{pageValue}}" bind:searcontevent="changeSearCont" searBackArr="{{searArr}}">
</yeo-anima-search>
```

index.js

```js
 /**
   * 页面的初始数据
   */
  data: {
    // 双向绑定数据
    pageValue: ''
  },

  // 改变数据搜索内容
  changeSearCont(e) {
    if (e.detail.searCont) {
      // 获取实时搜索内容
      let searCon = e.detail.searCont;
      wx.request({
        // 这里是作者本人接口，支持与否，取决于作者是否进行了后期服务器续费操作
        url: 'https://yundingxikj.cn/weixin/search/' + searCon,
        success: res => {
          console.log(res.data);
          // 构建新数组，存入返回值
          let searArr = res.data.filter((value, index) => {
            return index < 3;
          }).map((value, index) => {
            let obj = {};
            obj.tit = value.articleTitle;
            obj.desc = value.articleSummary.substring(0,14);

            return obj;
          })

          this.setData({
            searArr: searArr
          })
        },
        fail: res => {
          wx.showToast({
            icon: 'none',
            title: '网络错误，请稍后再试',
          })
        }
      })
    } else {
      console.log('暂无搜索值');
    }

  },
```

## yeo-horizon-slider（横向滑动栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/10/ywohf1.png" style="zoom:67%;" />

### 描述

向右滑动展示更多内容

### 属性说明

| 属性名        | 类型    | 默认值 | 说明             |
| ------------- | :------ | ------ | ---------------- |
| sliderArr     | Array   | null   | 遍历数组数据     |
| isShowContent | Boolean | true   | 是否显示文字内容 |

### 事件

| 事件名          | 事件描述     | 组件返回页面数据 | 返回数据类型 | 返回数据说明                             |
| --------------- | ------------ | ---------------- | ------------ | ---------------------------------------- |
| bind:clickevent | 监听点击事件 | clickObj         | Object       | 返回点击对象的图片地址、标题、描述、索引 |

### 使用示例

index.wxml

```html
<yeo-horizon-slider sliderArr='{{sliderArr}}' bind:clickevent='clickObj'></yeo-horizon-slider>
```

index.js

```js
  /**
   * 页面的初始数据
   */
  data: {
    // 传入数组数据
    sliderArr: [{
        picUrl: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
        title: '怦然心动',
        description: '月亮将会奔你而来',
        picBorder: ''
      },
      {
        picUrl: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg',
        title: '傲慢与偏见',
        description: '以灵魂唤醒灵魂',
        picBorder: ''
      },
      {
        picUrl: 'https://s1.ax1x.com/2020/08/02/aYQfFx.jpg',
        title: '老人与海',
        description: '老人与海的固执',
        picBorder: ''
      },
      {
        picUrl: 'https://s1.ax1x.com/2020/08/02/aYlncF.jpg',
        title: '复仇者联盟',
        description: '以父之名论英雄',
        picBorder: ''
      },
    ]
  },

  // 点击事件
  clickObj(e) {
    // 监听触发目标
    console.log(e.detail.clickObj);
  },
```

## yeo-horizon-slider-v2（横向滑动栏-v2）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/10/ywqkrV.png" style="zoom:67%;" />

### 描述

向右滑动展示更多内容

### 属性说明

| 属性名    | 类型    | 默认值 | 说明                 |
| --------- | :------ | ------ | -------------------- |
| sliderArr | Array   | null   | 遍历数组数据         |
| isShowMov | Boolean | true   | 是否开启动画滑动提示 |
| titFont   | Number  | 20     | 标题大小             |
| numFont   | Number  | 50     | 数字大小             |

### 事件

| 事件名          | 事件描述     |
| --------------- | ------------ |
| bind:clickevent | 监听点击事件 |

### 使用示例

index.wxml

```html
<yeo-horizon-slider-v2 sliderArr='{{sliderArr}}' bind:clickevent="clickObj">
</yeo-horizon-slider-v2>
```

index.js

```js
 /**
   * 页面的初始数据
   */
  data: {
    sliderArr: [
      {picUrl: '../../images/computer.png',bgColor: '#EBDFFF',title: 'Article',num: 19},
      {picUrl: '../../images/earphone.png',bgColor: '#C4EFFC',title: 'Category',num: 6},
      {picUrl: '../../images/router.png',bgColor: '#948CFF',title: 'Module',num: 3}
    ]
  },

  // 获取点击对象
  clickObj(e) {
    // 获取点击对象
    console.log(e.detail.itemObj);
  },
```

## yeo-dyfunbar（动态功能栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/09/ydp3Md.png" style="zoom:80%;" />

### 描述

动态功能栏，可以根据自我需求对功能栏进行改变，整个组件分别有左、中、右三个部分组成

### 属性说明

| 属性名       | 类型   | 默认值 | 说明         |
| ------------ | :----- | ------ | ------------ |
| distractWay  | String | around | 分散方式     |
| sideDistance | Number | 0      | 左右两边边距 |

* distractWay具体属性值

| 属性值  | 说明       |
| ------- | ---------- |
| start   | 集中在左边 |
| end     | 集中在右边 |
| center  | 集中在中间 |
| between | 之间       |
| around  | 围绕       |

### 事件

| 事件名           | 事件描述         |
| ---------------- | ---------------- |
| bind:centerevent | 中间部分监听事件 |
| bind:leftevent   | 左边部分监听事件 |
| bind:rightevent  | 右边部分监听事件 |

### 插槽

总体功能栏是分三个部分的，每个部分都对应一个槽位供开发者自行添加

```html
  <yeo-icon slot='dy-left' IconSize='40' iconUrl='../imgs/back-2.png'></yeo-icon>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
```

### 使用示例

index.wxml

```html
<!-- 组合方式-1   icon/search/icon-->
<yeo-dy-fun-bar>
  <yeo-icon slot='dy-left' IconSize='40' iconUrl='../imgs/back-2.png'></yeo-icon>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
</yeo-dy-fun-bar>

<!-- 组合方式-2   hangSwing/search/hangSwing-->
<yeo-dy-fun-bar>
  <yeo-hang-swing slot='dy-left'
  ImgSize='70'></yeo-hang-swing>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-hang-swing slot='dy-right'
  ImgSize='70'></yeo-hang-swing>
</yeo-dy-fun-bar>

<!-- 组合方式-3   hangSwing/search/icon-->
<yeo-dy-fun-bar>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
</yeo-dy-fun-bar>

<!-- 组合方式-4   hangSwing/自定义/icon-->
<yeo-dy-fun-bar distractWay='between' sideDistance='30' bind:centerevent='centerTap'>
  <yeo-icon slot='dy-left' IconSize='40' iconUrl='../imgs/back-2.png'></yeo-icon>
  <view slot='dy-center'>我就是个所谓的标题</view>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
</yeo-dy-fun-bar>
```

## yeo-hang-swing（摇摆吊灯）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/09/yaLeyV.png" style="zoom:67%;" />

### 描述

传入一张图片，按照(50%,0)的图形中心点进行摆动

### 属性说明

| 属性名     | 类型   | 默认值                                    | 说明                         |
| ---------- | :----- | ----------------------------------------- | ---------------------------- |
| swingSpeed | Number | 1.5                                       | 摆动频率(数值越大，摆动越慢) |
| imgUrl     | String | https://s3.ax1x.com/2021/03/09/63FwCV.png | 图片地址                     |
| imgSize    | Number | 100                                       | 图片大小                     |

### 事件

| 事件名          | 事件描述     |
| --------------- | ------------ |
| bind:clickevent | 点击监听事件 |

### 使用示例

index.wxml

```html
<yeo-hang-swing ImgSize='80'></yeo-hang-swing>
```

## yeo-simple-card（简卡）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/09/yaUJKg.png" style="zoom:67%;" />

### 描述

根据自我喜好配置不同颜色的简卡

### 属性说明

| 属性名          | 类型   | 默认值                                    | 说明     |
| --------------- | :----- | ----------------------------------------- | -------- |
| imgUrl          | String | https://s3.ax1x.com/2021/03/09/63FF1O.jpg | 图片路径 |
| title           | String | 云顶犀开发社区                            | 标题     |
| description     | String | 致力于打造多元化生态系统                  | 内容     |
| BackgroundColor | String | orange                                    | 背景颜色 |

### 事件

| 事件名         | 事件描述             |
| -------------- | -------------------- |
| bind:picevent  | 点击图片监听事件     |
| bind:mainevent | 点击其他地方监听事件 |

### 使用示例

index.wxml 与 index.wxss

```html
<view class="outbox">
  <view class="inner">
    <yeo-simple-card />
  </view>
  <view class="inner">
    <yeo-simple-card BackgroundColor='#F3C143'/>
  </view>
  <view class="inner">
    <yeo-simple-card BackgroundColor='#9AC656'/>
  </view>
  <view class="inner">
    <yeo-simple-card BackgroundColor='#59B9B4'/>
  </view>
</view>
```

```css
.outbox {
  width: 93%;
  margin: 30rpx auto 0;
}
.outbox .inner {
  margin-bottom: 27rpx;
}
```

## yeo-card（介绍卡片）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/22/y7ni1U.png" style="zoom:77%;" />

### 描述

这是一个关于自我介绍的卡片，

### 属性说明

| 属性名          | 类型   | 默认值                                                       | 说明                           |
| --------------- | :----- | ------------------------------------------------------------ | ------------------------------ |
| name            | String | Mr.KLeo                                                      | 昵称                           |
| position        | String | 前端工程师/Dancer                                            | 职务或爱好                     |
| description     | String | 大家好，我是Mr.KLeo，一名正在学习前端的Person。热爱技术，热爱交流，热爱生活。擅长使用Vue、JavaScript、HTML、CSS、Yeo-components开发可复用的视图组件，希望与你共同进步！ | 介绍内容                       |
| cardPic         | String | https://s3.ax1x.com/2021/03/09/63FF1O.jpg                    | 右侧配图                       |
| btnBgColor      | String | #7AB2DC                                                      | （关注）按钮背景色             |
| clickBtnBgColor | String | \#5E6675                                                     | 点击（关注）按钮后，按钮背景色 |

### 事件

| 事件名           | 事件描述                 | 组件返回页面数据 | 返回数据类型 | 返回数据说明 |
| ---------------- | ------------------------ | ---------------- | ------------ | ------------ |
| bind:attentevent | 点击（关注）按钮监听事件 | isAttent         | Boolean      | 是否关注     |

### 使用示例

index.wxml 与 index.wxss

```html
<view class="pageBox">
  <yeo-card />
</view>
```

```css
.pageBox {
  margin: 70rpx auto;
}
```

## yeo-tab-bar（底部栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/08/yaClLR.png" style="zoom:70%;" />

### 描述

通过Vue构建组件的形式，将整个组件拆分为了两个块（YeoTabBar组件与YeoTabBarItem组件），用户可以根据自身需求，自定义tabbar中item个数（经过测试，3~5个效果最佳）

### 属性说明

* ==YeoTabBarItem组件==

| 属性名         | 类型   | 默认值 | 说明                             |
| -------------- | :----- | ------ | -------------------------------- |
| isSelect       | Number | null   | 是否为选中图标(1-选中，0-未选中) |
| selectWordsCol | String | null   | 选中时文字颜色                   |
| jumpUrl        | String | 空     | 跳转页面地址                     |

* ==YeoTabBar组件==

| 属性名        | 类型   | 默认值  | 说明     |
| ------------- | :----- | ------- | -------- |
| backgroundCol | String | #2E3B4A | 背景颜色 |

### 使用示例

index.wxml

```html
<yeo-tab-bar backgroundCol='#2E3B4A'>
  <yeo-tab-bar-item isSelect='1' selectWordsCol='#5BC6FA'>
    <image slot='pic-select' src="../../images/首页-select.png"></image>
    <image slot='pic' src="../../images/首页.png"></image>
    <view slot='tit'>首页</view>
  </yeo-tab-bar-item>

  <yeo-tab-bar-item isSelect='0' selectWordsCol='#5BC6FA'
  jumpUrl='/pages/yeo-hangswing/yeo-hangswing'>
    <image slot='pic-select' src="../../images/分类-select.png"></image>
    <image slot='pic' src="../../images/分类.png"></image>
    <view slot='tit'>分类</view>
  </yeo-tab-bar-item>

  <yeo-tab-bar-item isSelect='0' selectWordsCol='#5BC6FA'
  jumpUrl='/pages/yeo-dyfunbar/yeo-dyfunbar'>
    <image slot='pic-select' src="../../images/我的-select.png"></image>
    <image slot='pic' src="../../images/我的.png"></image>
    <view slot='tit'>我的</view>
  </yeo-tab-bar-item>
</yeo-tab-bar>
```

## yeo-flow-waterfall-box（瀑布流布局外框架）

### 展示效果

![](https://s4.ax1x.com/2021/03/19/6fAkpF.png)

### 描述

瀑布流布局的外框架，内容由开发者自行定义

### 插槽

```html
<yeo-flow-waterfall-box>
  <yeo-text-box></yeo-text-box>
  <yeo-text-box></yeo-text-box>
</yeo-flow-waterfall-box>
```

### 使用示例

index.wxml

```html
<yeo-flow-waterfall-box>
  <!-- 奇数 -->
  <yeo-text-box wx:for="{{dataArr}}" wx:key='index' wx:if="{{index % 2 == 0}}" content='{{item.content}}'></yeo-text-box>

  <!-- 偶数 -->
  <yeo-text-box wx:for="{{dataArr}}" wx:key='index' wx:if="{{index % 2 != 0}}" content='{{item.content}}'></yeo-text-box>
</yeo-flow-waterfall-box>

<!-- 添加数据 -->
<button bindtap="add">添加</button>
```

index.wxss

```css
yeo-text-box {
  display: inline-block;
  margin-bottom: 20rpx;
}
```

index.js

```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛1'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛2'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛3'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛4'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛5'
      },
      {
        content: '我是一个人在游走的时候我送山大佛都发生的的撒佛6'
      },
    ]
  },

  // 添加数据
  add() {
    let dataArr = this.data.dataArr;
    let newArr = [{
        content: '我是新数据，看好了1'
      },
      {
        content: '我是新数据，看好了2'
      },
      {
        content: '我是新数据，看好了3'
      },
      {
        content: '我是新数据，看好了4'
      },
      {
        content: '我是新数据，看好了5'
      },
      {
        content: '我是新数据，看好了6'
      },
    ];
    this.setData({
      dataArr: dataArr.concat(newArr)
    })
  },
})
```

## yeo-flow-waterfall（瀑布流布局）

### 展示效果

<img src="https://s3.ax1x.com/2021/03/08/61euod.png" style="zoom:67%;" />

### 描述

组件采用两列式的流式布局，开发者通过传入数组数据（图片、名称、点赞数等）对组件进行数据插入，其次对于组件的样式进行样式接口的开放

### 属性说明

| 属性名                     | 类型   | 默认值            | 说明                     |
| -------------------------- | :----- | ----------------- | ------------------------ |
| dataArr                    | Array  | 详细见下面代码    | 数组数据内容             |
| boxMargin                  | String | 0 20rpx           | 外层框外边距             |
| itemTopLeftRadius          | Number | 10                | item框左上方圆角         |
| itemTopRightRadius         | Number | 10                | item框右上方圆角         |
| itemContPadding            | String | 12rpx 23rpx 30rpx | item框内容内边距         |
| itemContBgColor            | String | rgb(240,240,240)  | item框内容背景颜色       |
| itemContTitleSize          | Number | 32                | 内容框标题字体大小       |
| itemContTitleWeight        | String | bold              | 内容框标题字体粗细       |
| itemContTitleColor         | String | \#3F3F4F          | 内容框标题字体颜色       |
| itemContTitleBotMargin     | Number | 15                | 内容框标题字体下外边距   |
| itemUserPicSize            | Number | 40                | 内容框用户头像大小       |
| itemUserPicBordRadius      | String | 50%               | 内容框用户头像圆角       |
| itemUserNameSize           | Number | 26                | 内容框用户名字体大小     |
| itemUserNameLetterSpacing  | Number | 1                 | 内容框用户名字间距       |
| itemUserNameColor          | String | \#767676          | 内容框用户名字体颜色     |
| itemUserNameMarginLeft     | Number | 12                | 内容框用户名字体左外边距 |
| itemContLovesPicSize       | Number | 35                | 内容框点赞图标大小       |
| itemContLovesNumSize       | Number | 30                | 内容框点赞数量字体大小   |
| itemContLovesNumColor      | String | \#6E6E6E          | 内容框点赞数量字体颜色   |
| itemContLovesNumMarginLeft | Number | 6                 | 内容框点赞数量左外边距   |

### 事件

| 事件名             | 事件描述             | 组件返回页面数据 | 返回数据类型 | 返回数据说明        |
| ------------------ | -------------------- | ---------------- | ------------ | ------------------- |
| bind:senddataevent | ==监听组件毁灭事件== | dataArr          | Object       | 返回改动后的dataArr |

### 使用示例

index.wxml

```html
<yeo-flow-waterfall></yeo-flow-waterfall>
```

## yeo-text-box（文本框）

### 展示效果

![](https://s4.ax1x.com/2021/03/19/6fA7u9.png)

### 描述

日记框，开发者可自由更改文本框大小（外层加样式）、文本框内文字颜色与大小

### 属性说明

| 属性名                      | 类型    | 默认值                                                       | 说明               |
| --------------------------- | :------ | ------------------------------------------------------------ | ------------------ |
| content                     | String  | 从昨天开始，我要好好学习，天天向上，嘻嘻，因为我是一个爱学习的Man | 内容               |
| userName                    | String  | 胡辣汤的朋友                                                 | 用户名             |
| commentNum                  | Number  | 265                                                          | 评论数量           |
| boxWidth                    | String  | 100%                                                         | 外框宽度           |
| boxBordRadius               | Number  | 25                                                           | 外框圆角           |
| boxShadow                   | String  | 0 0 20rpx #cccccc                                            | 外框阴影           |
| contMarginBottom            | Number  | 25                                                           | 内容底部外边距     |
| contLetterSpacing           | Number  | 2                                                            | 内容字间距         |
| contFontSize                | Number  | 28                                                           | 内容文字大小       |
| contLineHeight              | Number  | 1.55                                                         | 内容行高           |
| contentPadding              | String  | 28rpx 28rpx 13rpx                                            | 内容内边距         |
| contentBgColor              | String  | #F9F9F9                                                      | 内容背景色         |
| isShowHeadPic               | Boolean | true                                                         | 是否显示用户头像   |
| headPicUrl                  | String  | https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2596268243,3122318467&fm=26&gp=0.jpg | 用户头像url        |
| botBarHeadPicWidth          | Number  | 40                                                           | 用户头像宽度       |
| botBarHeadPicHeight         | Number  | 40                                                           | 用户头像高度       |
| botBarHeadPicMargin         | String  | 0 10rpx 0 0                                                  | 用户头像外边距     |
| botBarHeadPicBordRadius     | String  | 50%                                                          | 用户头像图片圆角   |
| botBarJustifyContent        | String  | space-between                                                | 底部栏布局方式     |
| botBarFontColor             | String  | #767676                                                      | 底部栏字体颜色     |
| botBarUserNameLetterSpacing | Number  | 1                                                            | 底部栏用户名字间距 |
| botBarUserNameFontSize      | Number  | 26                                                           | 底部栏字体大小     |
| picSize                     | Number  | 20                                                           | 箭头图标大小       |
| botBarPadding               | String  | 13rpx 28rpx 28rpx                                            | 底部栏内边距       |
| botBarBgColor               | String  | #F3F6F6                                                      | 底部栏背景色       |

### 事件

| 事件名          | 事件描述           | 组件返回页面数据 | 返回数据类型 | 返回数据说明                       |
| --------------- | ------------------ | ---------------- | ------------ | ---------------------------------- |
| bind:clickevent | 监听点击文本框事件 | info             | Object       | 包含用户名、文本内容、文本评论数量 |

### 使用示例

index.wxml 与 index.wxss

```html
<view class="box">
  <yeo-text-box></yeo-text-box>
</view>
```

```css
.box {
  margin: 30rpx 200rpx 0;
}
```

## yeo-diary-box（日记框）

### 展示效果

![](https://s3.ax1x.com/2021/03/19/6RWrj0.png)

### 描述

日记框，开发者可自由更改日记框大小（外层加样式）、日记框内文字颜色与大小

### 属性说明

| 属性名               | 类型   | 默认值                                                       | 说明           |
| -------------------- | :----- | ------------------------------------------------------------ | -------------- |
| diaryTit             | String | 日记男孩                                                     | 标题           |
| diaryContent         | String | 我们总是打扫房间思想水利电力谁都得四我看看水电费计息撒旦法大反馈了山东中路上的方块第三方 | 日记内容       |
| diaryDate            | String | 3月5日                                                       | 日记时间       |
| fontColor            | String | #293939                                                      | 字体颜色       |
| bgColor              | String | \#f6f6f6                                                     | 背景色         |
| bordRadius           | Number | 25                                                           | 外框圆角       |
| padding              | Number | 30                                                           | 内边距         |
| marginBottom         | Number | 20                                                           | 外框底部外边距 |
| titFontSize          | Number | 35                                                           | 标题字体大小   |
| titFontWeight        | String | bold                                                         | 标题字体粗细   |
| titPaddingTop        | Number | 15                                                           | 标题顶部内边距 |
| titMarginBottom      | Number | 20                                                           | 标题底部外边距 |
| contentLetterSpacing | Number | 2                                                            | 内容字间距     |
| contentFontSize      | Number | 27                                                           | 内容字体大小   |
| contentMarginBottom  | Number | 25                                                           | 内容底部外边距 |
| dateFontSize         | Number | 30                                                           | 日期字体大小   |

### 事件

| 事件名          | 事件描述           | 组件返回页面数据 | 返回数据类型 | 返回数据说明                     |
| --------------- | ------------------ | ---------------- | ------------ | -------------------------------- |
| bind:clickevent | 监听点击日记框事件 | info             | Object       | 包含日记标题、日记内容、日记时间 |

### 使用示例

index.wxml 与 index.wxss

```html
<view class="box">
  <yeo-diary-box></yeo-diary-box>
</view>
```

```css
.box {
  margin: 30rpx 20rpx 0;
}
```

## yeo-stamp-text（邮票文本框）

### 展示效果

![](https://z3.ax1x.com/2021/03/20/64ZXCt.png)

### 描述

邮票框，开发者可自行调整邮票图片、信件内容、用户名与时间

### 属性说明

| 属性名               | 类型   | 默认值                                             | 说明                   |
| -------------------- | :----- | -------------------------------------------------- | ---------------------- |
| boxWidth             | Number | 300                                                | 外框宽度               |
| boxHeight            | Number | 410                                                | 外框高度               |
| boxPadding           | String | #ffffff                                            | 内边距                 |
| boxBordRadius        | Number | 10                                                 | 外框圆角               |
| boxShadow            | String | 0 0 10rpx #bbbbbb                                  | 外框阴影               |
| fontFamily           | String | 'Courier New', Courier, monospace                  | 字体                   |
| stampTopPadding      | String | 0 0 30rpx                                          | 顶部邮票栏内边距       |
| stampTopLeftPic      | String | https://s4.ax1x.com/2021/03/20/6hQpOf.png          | 顶部邮票栏左图         |
| stampTopLeftPicSize  | Number | 50                                                 | 顶部邮票栏左图大小     |
| stampPic             | String | https://s4.ax1x.com/2021/03/20/6h1kzn.png          | 顶部邮票栏邮票图片地址 |
| stampPicWidthSize    | Number | 90                                                 | 顶部邮票栏邮票图片宽度 |
| stampPicHeightSize   | Number | 120                                                | 顶部邮票栏邮票图片高度 |
| contentHeight        | Number | 120                                                | 内容高度               |
| contentFontColor     | String | \#4B4B4B                                           | 内容框字体颜色         |
| contentFontSize      | Number | 26                                                 | 内容框字体大小         |
| contentPadding       | String | 0 0 60rpx                                          | 内容框内边距           |
| contentLineHeight    | Number | 1.6                                                | 内容框行高             |
| contentLetterSpacing | Number | 1                                                  | 内容框字间距           |
| infoNameFontSize     | Number | 30                                                 | 信息栏用户名字体大小   |
| infoNamePadding      | String | 0 0 50rpx                                          | 信息框用户名内边距     |
| infoNameFontColor    | String | #24314C                                            | 信息框用户名字体颜色   |
| infoNameFontWeight   | String | bold                                               | 信息框用户名字体粗细   |
| content              | String | 这是一个关于邮票的文本框，用户可以自定义邮票与内容 | 内容                   |
| name                 | String | 幸运小木头                                         | 用户名                 |
| date                 | String | 今天上午 11:32                                     | 时间                   |

### 事件

| 事件名          | 事件描述           | 组件返回页面数据 | 返回数据类型 | 返回数据说明                       |
| --------------- | ------------------ | ---------------- | ------------ | ---------------------------------- |
| bind:clickevent | 监听点击邮票框事件 | info             | Object       | 包含邮票用户名、日记内容、日记时间 |

### 使用示例

index.wxml 与 index.wxss

```html
<yeo-stamp-text></yeo-stamp-text>
```

```css
page {
  background: #f6f6f6;
}
```

## yeo-label-box（标签框）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/08/yapTun.png" style="zoom:70%;" />

### 描述

在此框中，下部分的小字描述是slot插槽部分，可动态变化（通过具名slot)

### 属性说明

| 属性名     | 类型   | 默认值      | 说明           |
| ---------- | :----- | ----------- | -------------- |
| titleWords | String | Vue双向绑定 | 标题内容       |
| looks      | String | 66666       | 浏览数         |
| looksCol   | String | 无          | 浏览数的颜色   |
| bordRadius | Number | 13          | 背景框圆角大小 |
| bgColor    | String | \#FFFFFF    | 背景颜色       |

### 事件

| 事件名          | 事件描述       |
| --------------- | -------------- |
| bind:clickevent | 标签框监听事件 |

### 插槽

此组件需要使用具名插槽作为小字内容

```html
<view slot='content'>文字内容</view>
```

### 使用示例

index.wxml 与 index.js

```html
<!-- 标签框组件 -->
<yeo-label-box titleWords='Java工程师面试考点' bind:clickevent='clickEvent'>
  <view slot='content'>· Java学成什么样子可以找到工作?</view>
  <view slot='content'>· Java学成什么样子可以找到工作?不要去抱怨这些没有的启迪大水发？</view>
</yeo-label-box>

<!-- 标签框组件 -->
<yeo-label-box looks='100000' bind:clickevent='clickEvent'>
  <view slot='content'>从而使表格偶数行和奇数行颜色不一样。这样的兼容性很好。但是最近在做手机网站的时候，由于手机网站对浏览器兼容
  </view>
</yeo-label-box>
```

```js
// 点击组件
  clickEvent(e) {
    console.log(e);
    console.log('标签框被点击');
  },
```

## yeo-stretch（动态伸缩模块）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/20/yI8Xxf.png" style="zoom:67%;" /><img src="https://s3.ax1x.com/2021/02/20/yIGpZQ.png" style="zoom:67%;" />

### 描述

通过点击闪动的闪电小图标（当然你也可以更换），动态伸缩展示具体内容，展示内容通过具名插槽传入，同时展开后支持向下滑动，也就是说不限制插槽内容高度。

### 属性说明

| 属性名                   | 类型   | 默认值                                    | 说明                                                       |
| ------------------------ | :----- | ----------------------------------------- | ---------------------------------------------------------- |
| flickPic                 | String | https://s3.ax1x.com/2021/03/09/63FgER.png | 闪动图标                                                   |
| boxWidth                 | String | 90%                                       | 展示框宽度(百分数或者具体数值)                             |
| boxHeight                | Number | 1000                                      | 展示框高度                                                 |
| boxRadius                | Number | 30                                        | 展示框圆角(0-50最佳)                                       |
| TransTime                | Number | 1                                         | 展示框&&闪动图标伸展收缩持续时长(0-3s，超过3s统一设置为3s) |
| flickPicMovRightDistance | String | 86%                                       | 闪动图标向右移动距离(百分数或者具体数值)                   |

### 插槽

index.wxml

```html
  <yeo-stretch>
    <!-- 插槽 -->
    <view slot='content'>
     	<!-- 插入内容 -->
    </view>
  </yeo-stretch>
```

### 使用示例

index.wxml

```html
<view class="box">
  <yeo-stretch>

    <!-- 传入组件作为插槽内容 -->
    <view slot='content'>
      <yeo-label-box>
        <view slot='content'>
          左右和啥打法上撒旦法四大发顺丰下次茶多酚爱的色放奥的斯是驾驶的立法奥德赛放假啊实打实说的覅偶而忘记微微辣插卡积分ad佛阿斯蒂芬
        </view>
      </yeo-label-box>

      <yeo-label-box>
        <view slot='content'>
          左右和啥打法上撒旦法四大发顺丰下次茶多酚爱的色放奥的斯是驾驶的立法奥德赛放假啊实打实说的覅偶而忘记微微辣插卡积分ad佛阿斯蒂芬
        </view>
      </yeo-label-box>

      <yeo-label-box>
        <view slot='content'>
          左右和啥打法上撒旦法四大发顺丰下次茶多酚爱的色放奥的斯是驾驶的立法奥德赛放假啊实打实说的覅偶而忘记微微辣插卡积分ad佛阿斯蒂芬
        </view>
      </yeo-label-box>
    </view>

  </yeo-stretch>
</view>
```

index.wxss

```css
.box {
  margin: 30rpx 0 30rpx 50rpx;
}
```

## yeo-tools-bar（工具栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/08/yUY201.png" style="zoom:50%;" /><img src="https://s3.ax1x.com/2021/02/08/yUYgmR.png" style="zoom:50%;" />

### 描述

点击中心图标，工具栏动画展开；再次点击复原

### 属性说明

| 属性名      | 类型   | 默认值                                    | 说明                            |
| ----------- | :----- | ----------------------------------------- | ------------------------------- |
| bordRadius  | Number | 15                                        | 背景块圆角大小                  |
| movDistance | Number | 52                                        | 动画展示距离                    |
| mainPic     | String | https://s3.ax1x.com/2021/03/09/63FQ9f.png | 中心控制显示图标路径            |
| upPic       | String | https://s3.ax1x.com/2021/03/09/63FK4P.png | 上图标路径                      |
| rightUpPic  | String | https://s3.ax1x.com/2021/03/09/63Fl38.png | 右上图标路径                    |
| rightPic    | String | https://s3.ax1x.com/2021/03/09/63FuNt.png | 右图标路径                      |
| picSize     | Number | 15                                        | 图标相对背景块大小（10~25适宜） |
| bgColor     | String | #9266F9                                   | 背景块颜色                      |

### 事件

| 事件名            | 事件描述         |
| ----------------- | ---------------- |
| bind:upevent      | 上图标监听事件   |
| bind:uprightevent | 右上图标监听事件 |
| bind:rightevent   | 右图标监听事件   |

### 使用示例

index.wxml 与 index.js

```html
<yeo-tools-bar bind:upevent='upEvent'></yeo-tools-bar>
```

```js
// 监听上图标事件
  upEvent(e) {
    console.log(e);
  },
```

## ==yeo-comment==（评论组件）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/25/yxPjzV.png" style="zoom: 74%;" />

### 描述

整个评论组件其实是由前面的三个组件组合而成（yeo-art-font、yeo-dyfunbar、yeo-message-card），通过适当调整开发而成，为了达到最优展示效果，笔者提供的开发属性与接口相对减少，只对外开放必要属性进行更改（其实我就是懒）

### 属性说明

| 属性名         | 类型   | 默认值                  | 说明                           |
| -------------- | :----- | ----------------------- | ------------------------------ |
| boxTopMargin   | Number | 50                      | 评论组件上外边距               |
| boxSizeMargin  | Number | 40                      | 评论组件左右外边距             |
| boxBotMargin   | Number | 40                      | 评论组件下外边距               |
| commentTitle   | String | 最新评论                | 评论顶标题                     |
| commentColor   | String | #188AFC                 | 评论顶标题颜色                 |
| lineWidth      | String | 94rpx                   | 下划线长度（百分比or具体数值） |
| lineColor      | String | \#5AC3D6                | 下划线颜色                     |
| searBordRadius | Number | 20                      | 搜索框圆角                     |
| placeholder    | String | 快来留下你精彩的评论... | 输入框占位文字                 |
| initValue      | String | ''                      | 初始化输入内容                 |

### 事件

| 事件名            | 事件描述                 | 组件返回页面数据 | 返回数据类型 | 返回数据说明                       |
| ----------------- | ------------------------ | ---------------- | ------------ | ---------------------------------- |
| bind:userimgevent | 监听点击评论用户头像事件 | userInfo         | Object       | 包含用户名、用户头像url            |
| bind:commentevent | 监听点击内容事件         | commentInfo      | Object       | 包含用户名、发布时间、用户评论内容 |

### 使用示例

index.wxml

```html
<yeo-comment bind:sendenterevent='enterEvent' bind:inputevent='inputEvent' bind:sendmessageevent='sendmessageEvent' initValue='{{initValue}}'>
  <yeo-message-card wx:for="{{commentArr}}" time='{{item.time}}' headPendant='{{item.headPendant}}'
    userName='{{item.userName}}' userImg='{{item.userImg}}' content="{{item.content}}" bind:userimgclick='clickUserImg'
    bind:contentclick='clickContent' wx:key='index'></yeo-message-card>
</yeo-comment>
```

index.js

```js
// miniprogram/pages/yeo-comment/yeo-comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 评论数组数据 */
    commentArr: [{
        userImg: 'https://s3.ax1x.com/2021/03/09/63FF1O.jpg',
        headPendant: 7,
        userName: '人是非',
        content: '我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡',
        time: '2021-2-21'
      },
      {
        userImg: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg',
        headPendant: 3,
        userName: '陌生的兄弟',
        content: '楼上说的对',
        time: '2021-3-22'
      },
      {
        userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
        headPendant: 5,
        userName: '可爱的猫',
        content: '楼上说的有道理',
        time: '2021-1-05'
      },
    ],
    // 输入框输入内容
    inputContent: '',

    // 函数节流前一个判断时间
    preViousTime: 0
  },

  // 回车事件
  enterEvent(e) {
    // 获取输入内容
    let comment_cont = e.detail.comment_cont;
    if (comment_cont == '') {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
    } else {
      this.sendMsg(comment_cont);
    }
  },

  // 键盘输入事件
  inputEvent(e) {
    // 获取输入内容
    let input_cont = e.detail.realtime_comment;
    this.setData({
      inputContent: input_cont
    })
  },

  // 点击发送图片事件
  sendmessageEvent(e) {
    // 获取输入内容
    let input_cont = this.data.inputContent;
    if (input_cont == '') {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
    } else {
      this.sendMsg(input_cont);
    }
  },

  // 发送评论
  sendMsg(content) {
    // 获取以前的时间
    let preViousTime = this.data.preViousTime;
    // 获取当前时间
    let nowTime = new Date();
    // 获取评论对象
    let objInfo = {
      // 用户名
      userName: '荒野大道',
      // 头像挂件等级
      headPendant: 0,
      // 用户头像
      userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
    };
    // 限制用户评论间隔时长 5000ms
    if (nowTime - preViousTime >= 5000) {
      // 新建评论对象
      let newCont = {
        userName: objInfo.userName,
        headPendant: objInfo.headPendant,
        userImg: objInfo.userImg,
        content
      };
      this.data.commentArr.push(newCont);
      this.setData({
        commentArr: this.data.commentArr,
        preViousTime: new Date(),
        initValue: '',
        inputContent: ''
      })
      wx.showToast({
        title: '发布成功',
      })
    } else {
      wx.showToast({
        title: '输入频繁，请稍后再试',
        icon: 'none'
      })
    }
  },

})
```

