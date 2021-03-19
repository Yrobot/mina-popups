# menu-popover

![](https://track.yrobot.top/ga-beacon/UA-190592680-2/mina-popups/menu-popover/readme?flat)

`menu-popover`，快速实现 添加到我的小程序

## 先看效果

| ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0XlellZ9pPkI4XGuIMwWBNYRCicibYcQfIZq661ht4dvg51xw8VsbDnvw/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0VZyIr7VIhXsTnv33NF7XsvjctIYdfYvEJH2fyy3P3PTKbocuAOkoiaA/0?wx_fmt=png) |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 胶囊气泡                                                                                                                                      | 扫码体验                                                                                                                                     |

## 使用方法

**大致可以分为 2 步：**

1. npm 安装 `mina-popups`，开发工具构建 npm
2. 引入并使用 `mina-popups/menu-popover` 组件

### 命令行

`npm install mina-popups `  
安装完成后，开发工具构建 npm

### \*.json 引入组件

```json
{
  "usingComponents": {
    "menu-popover": "mina-popups/menu-popover"
  }
}
```

### \*.wxml 使用组件

```html
<menu-popover show="{{show}}">
  <view class="popover-inner">
    <text class="tip">点击 ...“添加到我的小程序”\n领币更方便</text>
    <view class="close" bindtap="close">X</view>
  </view>
</menu-popover>
```

| 属性 | 类型    | 默认值 | 描述             |
| ---- | ------- | ------ | ---------------- |
| show | Boolean | false  | 是否显示 popover |

---

以上简单几步即可实现 引导添加我的小程序

#### 具体使用请查看 Github [https://github.com/Yrobot/mina-popups](https://github.com/Yrobot/mina-popups)

如果喜欢 mina-popups，记得在 github 点个 **start** 哦！:star2::star2::star2:
