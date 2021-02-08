# Yeo小程序组件使用文档













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

