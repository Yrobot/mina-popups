Component({
  behaviors: ['wx://component-export'],
  export() {
    this.popover = this.selectComponent('#popover');
    return {
      open: this.openGuide.bind(this),
      close: this.closeGuide.bind(this),
    };
  },
  options: {},
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
  },
  observers: {
    show(show) {
      console.log(show)
      if (show) {
        this.openGuide();
      } else {
        this.closeGuide();
      }
    },
  },
  data: {
    left: 0,
    top: 0,
    translateX: 15,
  },
  methods: {
    closeGuide() {
      this.popover.close();
    },
    openGuide() {
      if (this._ready) {
        this.popover.open();
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
      this.popover = this.selectComponent('#popover');
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
