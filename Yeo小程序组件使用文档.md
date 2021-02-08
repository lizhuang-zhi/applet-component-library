# Yeo小程序组件使用文档











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

index.html 与 index.js

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

index.html 与 index.js

```html
<yeo-tools-bar bind:upevent='upEvent'></yeo-tools-bar>
```

```js
// 监听上图标事件
  upEvent(e) {
    console.log(e);
  },
```

