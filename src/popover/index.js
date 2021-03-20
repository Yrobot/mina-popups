// 基于fixed-position + popup-base 处理弹窗样式
// 不考虑center-position
Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      open: this.open.bind(this),
      close: this.close.bind(this),
    };
  },
  options: {
    addGlobalClass: true,
  },
  properties: {
    selector: {
      type: String,
      value: '',
    },
    left: {
      type: Number,
      value: 0,
    },
    top: {
      type: Number,
      value: 0,
    },
    unit: {
      type: String,
      value: 'px',
    },
    tapMaskClose: {
      type: Boolean,
      value: true,
    },
    scrollMaskClose: {
      type: Boolean,
      value: false,
    },
    show: {
      type: Boolean,
      value: false,
    },
    maskColor: {
      type: String,
      value: '',
    },
    catchScroll: {
      type: Boolean,
      value: true,
    },
    mask: {
      type: Boolean,
      value: true,
    },
    translateX: {
      type: Number,
      value: 15,
    },
  },
  observers: {
    show(show) {
      if (show) {
        if (this.popupBase) {
          this.open();
        } else {
          this._open_after_init = true;
        }
      } else {
        this.close();
      }
    },
  },
  data: {
    isLeft: true,
    isTop: true,
    nodeHalfHeight: 0,
  },
  lifetimes: {
    ready() {
      this.init();
    },
  },
  methods: {
    init() {
      this._init = true;
      this.getPopupBase();
    },
    getPopupBase() {
      this.popupBase = this.selectComponent('#popup-base');
      return this.popupBase;
    },
    open(area) {
      if (!this._init) {
        this.init();
      }
      this.popupBase.open(area);
    },
    close() {
      if (!this._init) {
        this.init();
      }
      this.popupBase.close();
    },
    doDirection(e) {
      const { left, top, node, viewport } = e.detail || {};
      if (left != undefined && top != undefined && viewport) {
        const isLeft = left < viewport.width / 2;
        const isTop = top < viewport.height / 2;
        this.setData(
          {
            isLeft,
            isTop,
            nodeHalfHeight: node ? node.height / 2 : 0,
          },
          () => {
            if (this._open_after_init) {
              this.open();
            }
          },
        );
      } else {
        console.error('popup-window doDirection 还未获取到 left, top, viewport');
      }
    },
  },
});
