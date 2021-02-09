# Yeo小程序组件使用文档









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

