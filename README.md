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
    "yeo-tools-bar": "/Yeo/YeoToolsBar/YeoToolsBar"
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

| 属性名           | 类型   | 默认值         | 说明                   |
| ---------------- | :----- | -------------- | ---------------------- |
| bgColor          | String | \#948CFF       | 背景颜色               |
| picUrl           | String | ../imgs/qq.png | 图片地址               |
| picSize          | Number | 46             | 图片大小               |
| paddingLeftofPic | Number | 30             | 图片距离框体左侧内边距 |
| boxRadius        | Number | 32             | 框体圆角               |
| boxMarginBottom  | Number | 38             | 框体底部外边距         |

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

| 属性名   | 类型   | 默认值             | 说明     |
| -------- | :----- | ------------------ | -------- |
| iconUrl  | String | ../imgs/vegt-1.png | 图片地址 |
| IconSize | Number | 160                | 图片大小 |

### 使用示例

index.wxml

```html
<yeo-icon></yeo-icon>
```

## yeo-search（搜索栏）

### 展示效果

<img src="https://s3.ax1x.com/2021/02/22/y7WsED.png" style="zoom:80%;" />

### 描述

搜索组件，开发者可根据爱好对搜索图标，占位文字进行更改，其次也可以根据自己需求对图标，输入框的位置与搜索框整体的大小进行更改。

### 属性说明

| 属性名           | 类型   | 默认值             | 说明           |
| ---------------- | :----- | ------------------ | -------------- |
| searchImg        | String | ../imgs/search.png | 搜索图标       |
| placeholder      | String | Input Something    | 占位文字       |
| background       | String | rgb(250,250,250)   | 背景颜色       |
| searBordRadius   | Number | 60                 | 搜索框圆角     |
| topPadding       | Number | 12                 | 上内边距       |
| bottomPadding    | Number | 12                 | 下内边距       |
| leftPadding      | Number | 30                 | 左内边距       |
| rightPadding     | Number | 30                 | 右内边距       |
| inputLeftMargin  | Number | 16                 | 输入框左外边距 |
| inputRightMargin | Number | 30                 | 输入框右外边距 |
| inputType        | String | text               | 输入内容类型   |

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

| 属性名         | 类型   | 默认值 | 说明                   |
| -------------- | :----- | ------ | ---------------------- |
| bindvalue      | String | null   | 搜索输入值             |
| searBackArr    | Array  | null   | 返回搜索结果数组       |
| lineWidth      | Number | 330    | line长度               |
| titFont        | Number | 28     | 搜索内容标题大小       |
| descFont       | Number | 23     | 搜索内容描述大小       |
| horizonWidth   | Number | 200    | 横向展开宽度（px）     |
| perpendHeight  | Number | 260    | 垂直展开高度（px）     |
| cancelMovRight | Number | 160    | 取消叉图右移距离（px） |
| inputMovRight  | Number | 40     | 输入框右移距离（px）   |
| inputWidth     | Number | 90     | 输入框宽度（px）       |

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

| 属性名    | 类型  | 默认值 | 说明         |
| --------- | :---- | ------ | ------------ |
| sliderArr | Array | null   | 遍历数组数据 |

### 事件

| 事件名          | 事件描述     |
| --------------- | ------------ |
| bind:clickevent | 监听点击事件 |

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
    sliderArr: [
      {picUrl: '../imgs/YHS-1.jpg',title: '怦然心动',description: '月亮将会奔你而来'},
      {picUrl: '../imgs/YHS-2.jpg',title: '傲慢与偏见',description: '以灵魂唤醒灵魂'},
      {picUrl: '../imgs/YHS-3.jfif',title: '老人与海',description: '老人与海的固执'},
      {picUrl: '../imgs/YHS-4.jpg',title: '复仇者联盟',description: '以父之名论英雄'},
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

| 属性名         | 类型   | 默认值           | 说明           |
| -------------- | :----- | ---------------- | -------------- |
| yeoBg          | String | rgb(240,240,240) | 搜索框背景     |
| yeoPlaceholder | String | Input Something  | 搜索框提示内容 |
| distractWay    | String | around           | 分散方式       |
| sideDistance   | Number | 0                | 左右两边边距   |

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

### 使用示例

index.wxml

```html
<!-- 组合方式-1   icon/search/icon-->
<yeo-dy-fun-bar yeoBg='rgb(230,230,230)' yeoPlaceholder='Please Input SomeThing'>
  <yeo-icon slot='dy-left' IconSize='40' iconUrl='../imgs/back-2.png'></yeo-icon>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
</yeo-dy-fun-bar>

<!-- 组合方式-2   hangSwing/search/hangSwing-->
<yeo-dy-fun-bar yeoBg='rgb(230,230,230)' yeoPlaceholder='Please Input SomeThing'>
  <yeo-hang-swing slot='dy-left'
  ImgSize='70'></yeo-hang-swing>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-hang-swing slot='dy-right'
  ImgSize='70'></yeo-hang-swing>
</yeo-dy-fun-bar>

<!-- 组合方式-3   hangSwing/search/icon-->
<yeo-dy-fun-bar yeoBg='rgb(230,230,230)' yeoPlaceholder='Please Input SomeThing'>
  <yeo-search slot='dy-center'></yeo-search>
  <yeo-icon slot='dy-right' IconSize='40' iconUrl='../imgs/分类.png'></yeo-icon>
</yeo-dy-fun-bar>

<!-- 组合方式-4   hangSwing/自定义/icon-->
<yeo-dy-fun-bar yeoBg='rgb(230,230,230)' yeoPlaceholder='Please Input SomeThing'
distractWay='between' sideDistance='30'>
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

| 属性名     | 类型   | 默认值           | 说明                         |
| ---------- | :----- | ---------------- | ---------------------------- |
| swingSpeed | Number | 1.5              | 摆动频率(数值越大，摆动越慢) |
| imgUrl     | String | ../imgs/吊灯.png | 图片地址                     |
| imgSize    | Number | 100              | 图片大小                     |

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

| 属性名          | 类型   | 默认值                   | 说明     |
| --------------- | :----- | ------------------------ | -------- |
| imgUrl          | String | ../imgs/introduce.jpg    | 图片路径 |
| title           | String | 云顶犀开发社区           | 标题     |
| description     | String | 致力于打造多元化生态系统 | 内容     |
| BackgroundColor | String | orange                   | 背景颜色 |

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
| cardPic         | String | ../imgs/introduce.jpg                                        | 右侧配图                       |
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

| 属性名                   | 类型   | 默认值             | 说明                                                       |
| ------------------------ | :----- | ------------------ | ---------------------------------------------------------- |
| flickPic                 | String | ../imgs/闪电-1.png | 闪动图标                                                   |
| boxWidth                 | String | 90%                | 展示框宽度(百分数或者具体数值)                             |
| boxHeight                | Number | 1000               | 展示框高度                                                 |
| boxRadius                | Number | 30                 | 展示框圆角(0-50最佳)                                       |
| TransTime                | Number | 1                  | 展示框&&闪动图标伸展收缩持续时长(0-3s，超过3s统一设置为3s) |
| flickPicMovRightDistance | String | 86%                | 闪动图标向右移动距离(百分数或者具体数值)                   |

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

| 属性名      | 类型   | 默认值                  | 说明                            |
| ----------- | :----- | ----------------------- | ------------------------------- |
| bordRadius  | Number | 15                      | 背景块圆角大小                  |
| movDistance | Number | 52                      | 动画展示距离                    |
| mainPic     | String | ../imgs/tools_main.png  | 中心控制显示图标路径            |
| upPic       | String | ../imgs/tools_index.png | 上图标路径                      |
| rightUpPic  | String | ../imgs/tools_relax.png | 右上图标路径                    |
| rightPic    | String | ../imgs/tools_cate.png  | 右图标路径                      |
| picSize     | Number | 15                      | 图标相对背景块大小（10~25适宜） |
| bgColor     | String | #9266F9                 | 背景块颜色                      |

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

