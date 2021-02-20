# mina-popups

`mina-popups`，一个方便、轻量的 **小程序** 弹出组件

## change log：

1. 2021.02.17 init package

## 主要的组件

#### popup

组件整合 popup 的通用逻辑：弹出位置，popup 背景 mask，函数式控制显隐  
并对 fixed 模式升级，不仅支持直接传入 left、top 控制 popup 位置，还支持传入 selector 自动设置 popup 位置

#### popover

在 popup 的基础上，完善气泡菜单的通用逻辑  
使用者只需要在 slot 里添加提示或者菜单内容即可  
popover 会根据触发位置自动改变展示方向

#### menu-popover

在 popover 的基础上，针对小程序引导添加我的小程序的场景，自动将 popover 定位到小程序药丸下方  
组件自动识别页面 `navigationStyle: custom` 属性，优化展示位，使用者无需关心适配问题

## demo 展示

1. demo1：快速实现发送验证码倒计时
   | 1 | 1 |
   | ----- | ----- |
   | 2 | 2 |

## 使用方法

**大致可以分为 2 步：**

1. npm 安装 mina-popups，开发工具构建 npm
2. 引入并使用 mina-popups 组件

### 命令行

`npm install mina-popups `  
安装完成后，开发工具构建 npm

### \*.json

```json
{
  "usingComponents": {
    "popup-base": "mina-popups/popup-base"
  }
}
```

### \*.wxml

在 view 上利用 popups 处理渲染逻辑

#### 简单展示

```html
<text wx:if="{{popups>0}}"> 倒计时{{popups}}秒 </text>

<text wx:else> 开始倒计时 </text>
```

#### 配合 mina-tool 的 wxs 工具 formatpopups 优化展示

使用 mina-tool,请参看 [mina-tool.wxs](https://github.com/Yrobot/mina-tool#wxs)

```html
<wxs src="mina-tool/wxs/format.wxs" module="format" />
<!-- 00:01:02 -->
<text> {{format.formatpopups(popups,'hh:mm:ss')}} </text>
<!-- 01:02 -->
<text>{{format.formatpopups(popups,'mm:ss')}}</text>
```

---

以上简单几步即可使用 mina-popups
