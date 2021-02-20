/**
 * @description popup-backgroud
 * 处理popup背景的逻辑：
 * 开启背景
 * 背景色
 * 阻塞滚动
 * 滚动关闭
 * 点击关闭
 * @author Yrobot
 * @date 22/01/2021
 */
Component({
  options: {},
  properties: {
    color: {
      type: String,
      value: '',
    },
    tapClose: {
      type: Boolean,
      value: true,
    },
    scrollClose: {
      type: Boolean,
      value: false,
    },
    catchScroll: {
      type: Boolean,
      value: true,
    },
  },
  observers: {},
  data: {},
  lifetimes: {
    ready() {},
  },
  methods: {
    moveBG() {
      if (this.data.scrollClose) {
        this.triggerEvent('close');
      }
    },
    tapBG() {
      if (this.data.tapClose) {
        this.triggerEvent('close');
      }
    },
  },
});
