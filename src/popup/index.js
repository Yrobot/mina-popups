/**
 * @description popup
 * 整合popup的通用逻辑：初始位置，popup背景，主动控制展示
 * 属性：参看properties
 * 事件：
 * position(){} 动态获取位置之后的回调，在此之前fixed-selector模式的位置可能不正确
 * onOpen(){} 打开popup的回调
 * onClose(){} 关闭popup的回调
 * @author Yrobot
 * @date 22/01/2021
 */
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
    // popup-backgroud
    mask: {
      // 是否显示 mask
      type: Boolean,
      value: true,
    },
    maskColor: {
      // mask的颜色，默认rgba(0, 0, 0, 0.6)
      type: String,
      value: 'rgba(0, 0, 0, 0.6)',
    },
    tapMaskClose: {
      // 点击mask是否关闭popup，先前条件是mask=true
      type: Boolean,
      value: true,
    },
    catchScroll: {
      // 滑动mask是联动page滑动，先前条件是mask=true
      type: Boolean,
      value: true,
    },
    scrollMaskClose: {
      // 滑动mask是否关闭popup，先前条件是mask=true
      type: Boolean,
      value: false,
    },

    // fixed-position
    selector: {
      // position=fixed时，使用selector来设置popup打开位置，默认为结点中心位置，具体数据会在position回调中返回
      type: String,
      value: '',
    },
    left: {
      // position=fixed时，直接使用left+top来控制popup的打开位置
      type: Number,
      value: 0,
    },
    top: {
      // position=fixed时，直接使用left+top来控制popup的打开位置
      type: Number,
      value: 0,
    },
    unit: {
      // position=fixed时，控制left、top的单位，默认px，注意selector模式会自动更新unit为px
      type: String,
      value: 'px',
    },

    // inner properties
    show: {
      // 是否显示popup
      type: Boolean,
      value: false,
    },
    position: {
      // popup的定位模式：fixed,center,left,right,top,bottom，默认fixed
      type: String,
      value: 'fixed', // fixed,center,left,right,top,bottom
    },
  },
  observers: {
    show(show) {
      if (show) {
        this.open();
      } else {
        this.close();
      }
    },
    position(position) {
      if (!['fixed', 'center', 'top', 'right', 'bottom', 'left'].includes(position)) {
        console.error(`popup position 不支持传入${position}`);
      }
    },
  },
  data: {},
  lifetimes: {
    ready() {
      this.init();
    },
  },
  methods: {
    init() {
      this._init = true;
      this.getFuncVisible();
    },
    getFixedPosition() {
      // this.fixedPosition = this.selectComponent('#fixed-position');
      // return this.fixedPosition;
      return this.selectComponent('#fixed-position');
    },
    getFuncVisible() {
      this.funcVisible = this.selectComponent('#func-visible');
      return this.funcVisible;
    },
    open(area) {
      if (!this._init) {
        this.init();
      }
      const { selector, position } = this.data;
      if (position == 'fixed') {
        this.getFixedPosition()
          .freshPosition(selector, area)
          .then((position) => {
            this.triggerEvent('position', position);
            this.funcVisible.open();
          });
      } else {
        this.funcVisible.open();
      }
      this.triggerEvent('onOpen', {});
    },
    close() {
      if (!this._init) {
        this.init();
      }
      this.funcVisible.close();
      this.triggerEvent('onClose', {});
    },
  },
});
