Component({
  behaviors: ['wx://component-export'],
  export() {
    this.popupWindow = this.selectComponent('#popup-window');
    return {
      open: this.openGuide.bind(this),
      close: this.closeGuide.bind(this),
    };
  },
  options: {},
  properties: {},
  data: {
    left: 0,
    top: 0,
    translateX: 15,
  },
  methods: {
    closeGuide() {
      this.popupWindow.close();
    },
    openGuide() {
      if (this._ready) {
        this.popupWindow.open();
      } else {
        this._open_when_ready = true;
      }
    },
    getGuidePosition() {
      return new Promise((resolve) => {
        const { bottom, left, width } = wx.getMenuButtonBoundingClientRect();
        const { screenHeight, windowHeight } = wx.getSystemInfoSync();
        const isCustom = screenHeight == windowHeight;
        this.setData(
          {
            left: left + width * 0.25,
            top: isCustom ? bottom + 4 : 0,
            translateX: width * 0.72,
          },
          () => {
            resolve();
          },
        );
      });
    },
  },
  lifetimes: {
    created: function () {
      this._ready = false;
      this._open_when_ready = false;
      this.popupWindow = this.selectComponent('#popup-window');
    },
    ready: function () {
      this.getGuidePosition().then(() => {
        this._ready = true;
        if (this._open_when_ready) {
          this.openGuide();
          this._open_when_ready = false;
        }
      });
    },
  },
});
