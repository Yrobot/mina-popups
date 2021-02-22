# mina-popups

`mina-popups`，一个方便、轻量的 **小程序** 弹出组件集合

## change log：

1. 2021.02.22 init package

## 层叠顺序规范

mask: 100  
popups: 200

_所以 page 下一层的业务样式层叠顺序层级应 < 100_

## 主要的组件

#### popup

- 组件整合 `popup` 的通用逻辑：弹出位置，背景 mask，函数式控制显隐
- 并对 fixed 模式升级，不仅支持直接传入 left、top 控制 `popup` 位置，还支持传入 selector 自动设置 `popup` 位置

| ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0Rlf3CKy1UjaYeVla2pnxT0DxsiaakrThSHOVUhMxEsZshicOkp8dqltg/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0sicVWrOWzthJWBEfq3ldU0Vc7Z3sUJompIEIgK6rr8V8ITu6gsiawKZQ/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0DJVRbkmRffPzftoFdIHYP024wbqQXFnyYUSxk3oU6ibhibmK9Oh8mLRQ/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0wfPVl20sWzEzGIeOERgI9y3dUKbfRZQiatWz8JdYSQibAEYKiaIvZ9CKQ/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0iaqLywOnpp7tyzQy2wtvAGwjicnqFhlR47FBKu7ufjjSFOc1LSsu8O5A/0?wx_fmt=png) |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `left`                                                                                                                                        | `top`                                                                                                                                         | `right`                                                                                                                                       | `bottom`                                                                                                                                       | `center`                                                                                                                                      |
| ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0cMUMLB9CDvkhNnCe3TUE5wTN3mt7hjRqhfCYuqnsfAmZ3yHqlyl4sg/0?wx_fmt=png)   | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0K1q6iboSNmx2MwX5RkgbGMk1qrx08DgFg3EX5qLdBK3tic8lsLxHxT6A/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0sERpqGo2N6tBHph6st22usLC9JtpoYawwcwWjwZVaXqjmAUib6q8S3g/0?wx_fmt=png)  |                                                                                                                                                |                                                                                                                                               |
| `fixed` `selector`                                                                                                                            | `fixed` `left&top`                                                                                                                            |                                                                                                                                               |                                                                                                                                                |                                                                                                                                               |

#### popover

- 在 `popup` 的基础上，完善气泡菜单的通用逻辑
- 使用者只需要在 slot 里添加提示或者菜单内容即可
- `popover` 会根据触发位置自动改变展示方向

| ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0y4ocGKKK3DpqW76z404xDT6nUAiaJoA0wrekQich3PbjTkGe3VhXRC9g/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0aelYibpk5TauAQicKbicg6icXicB1sHFGqP5p9ko2YiafsHrkha67PlJiaia3A/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm05bVRHpRCtP46l1NkU6naQIxsHU7tFkc3lK1ps4wqeictOHSf6PP0fPw/0?wx_fmt=png) |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 气泡菜单                                                                                                                                      | tooltip                                                                                                                                             |                                                                                                                                              |

#### menu-popover

- 在 `popover` 的基础上，针对小程序引导添加我的小程序的场景，自动将 popover 定位到小程序胶囊下方
- 组件自动识别页面 `navigationStyle: custom` 属性，优化展示位，使用者无需关心适配问题
  | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0XlellZ9pPkI4XGuIMwWBNYRCicibYcQfIZq661ht4dvg51xw8VsbDnvw/0?wx_fmt=png) | ![ ](https://mmbiz.qpic.cn/mmbiz_png/Z3Bib6gP5N98FAnfeic3I3mrj4Nq0yWUm0VZyIr7VIhXsTnv33NF7XsvjctIYdfYvEJH2fyy3P3PTKbocuAOkoiaA/0?wx_fmt=png) |
  | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 胶囊气泡 | |

## 使用方法

**大致可以分为 2 步：**

1. npm 安装 `mina-popups`，开发工具构建 npm
2. 引入并使用 `mina-popups` 组件

### 命令行

`npm install mina-popups `  
安装完成后，开发工具构建 npm

### \*.json

```json
{
  "usingComponents": {
    "popup": "mina-popups/popup",
    "popover": "mina-popups/popover",
    "menu-popover": "mina-popups/menu-popover"
  }
}
```

### \*.wxml

在 view 上利用 popups 处理渲染逻辑

```html
<popup
  show="{{popup.show}}"
  position="{{popup.position}}"
  mask="{{popup.mask}}"
  catchScroll="{{popup.catchScroll}}"
  tapMaskClose="{{popup.tapMaskClose}}"
  scrollMaskClose="{{popup.scrollMaskClose}}"
  maskColor="{{popup.maskColor}}"
  selector="{{popup.selector}}"
  left="{{popup.left}}"
  top="{{popup.top}}"
  unit="{{popup.unit}}"
  bind:position="position"
>
  <!-- popup-inner-wxml -->
</popup>

<popover
  show="{{popover.show}}"
  mask="{{popover.mask}}"
  catchScroll="{{popover.catchScroll}}"
  tapMaskClose="{{popover.tapMaskClose}}"
  scrollMaskClose="{{popover.scrollMaskClose}}"
  maskColor="{{popover.maskColor}}"
  left="{{popover.left}}"
  top="{{popover.top}}"
  unit="{{popover.unit}}"
  translateX="{{popover.translateX}}"
>
  <!-- popover-inner-wxml -->
</popover>

<menu-popover show="{{show}}">
  <!-- menu-popover-inner-wxml -->
</menu-popover>
```

| 属性            | 类型    | 默认值               | 描述                                                                                                         |
| --------------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| show            | Boolean | false                | 是否显示 popup                                                                                               |
| position        | Enum    | fixed                | popup 的定位模式：fixed,center,left,right,top,bottom                                                         |
| mask            | Boolean | true                 | 是否显示 mask                                                                                                |
| catchScroll     | Boolean | true                 | 滑动 mask 是联动 page 滑动，先决条件是 mask=true                                                             |
| tapMaskClose    | Boolean | true                 | 点击 mask 是否关闭 popup，先决条件是 mask=true                                                               |
| scrollMaskClose | Boolean | false                | 滑动 mask 是否关闭 popup，先决条件是 mask=true                                                               |
| maskColor       | String  | 'rgba(0, 0, 0, 0.6)' | mask 的颜色                                                                                                  |
| selector        | String  | ''                   | position=fixed 时，使用 selector 来设置 popup 打开位置，默认为结点中心位置，具体数据会在 position 回调中返回 |
| left            | Number  | 0                    | position=fixed 时，直接使用 left+top 来控制 popup 的打开位置，先决条件是 selector=''                         |
| top             | Number  | 0                    | position=fixed 时，直接使用 left+top 来控制 popup 的打开位置，先决条件是 selector=''                         |
| unit            | String  | 'px'                 | position=fixed 时，控制 left、top 的单位，默认 px，注意 selector 模式会自动更新 unit 为 px                   |

## 注意事项

1. popups 对于层叠顺序的设计为：mask-100，popup-200，所以为了保证 popups 在页面不被遮挡，Page 下一层的业务样式层叠顺序不要超过 100。
