/**
 * @description func-visible
 * 支持使用 this.selectComponent 获取组件实例后，函数式控制visible
 * @author Yrobot
 * @date 22/01/2021
 */
Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      open: this._open.bind(this),
      close: this._close.bind(this),
    };
  },
  options: {},
  properties: {},
  observers: {},
  data: {
    visible: false,
  },
  lifetimes: {
    ready() {},
  },
  methods: {
    _open() {
      this.setData({
        visible: true,
      });
    },
    _close() {
      this.setData({
        visible: false,
      });
    },
  },
});
