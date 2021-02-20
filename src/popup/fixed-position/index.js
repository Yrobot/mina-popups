/**
 * @description fixed-position
 * 根据传入参数，处理渲染位置
 * top, left: 直接根据top,left作为渲染位置，单位px
 * freshPosition(selector, area): 使用选择器获取展示位置
 * @author Yrobot
 * @date 22/01/2021
 */
Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      freshPosition: this.freshPosition.bind(this),
    };
  },
  options: {},
  properties: {
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
  },
  observers: {
    left(left) {
      this.setData({
        _left: left,
      });
    },
    top(top) {
      this.setData({
        _top: top,
      });
    },
    unit(unit) {
      this.setData({
        _unit: unit,
      });
    },
  },
  data: {
    _left: 0,
    _top: 0,
    _unit: 'px',
    node: {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    },
    viewport: {
      width: 0,
      height: 0,
    },
  },
  lifetimes: {
    ready() {
      this.getViewport().then(({ viewport }) => {
        this.setData({ viewport });
      });
    },
  },
  methods: {
    _node2position(node) {
      if (node) {
        return {
          _left: node.left + node.width / 2,
          _top: node.top + node.height / 2,
          _unit: 'px',
        };
      } else {
        return {
          _left: this.data.left,
          _top: this.data.top,
          _unit: this.data.unit,
        };
      }
    },
    freshPosition(selector, area) {
      const { viewport } = this.data;

      const needGetViewport = viewport.width === 0;
      const needGetNode = !!selector;

      const posmiseList = [];
      if (needGetViewport) {
        posmiseList.push(this.getViewport());
      }
      if (needGetNode) {
        posmiseList.push(this.getNode(selector, area));
      }
      return new Promise((resolve, reject) => {
        Promise.all(posmiseList)
          .then((res = []) => {
            var data = {};
            res.map((d) => {
              data = { ...data, ...d };
            });
            // 更新left, top
            data = { ...data, ...this._node2position(data.node) };
            this.setData(data, () => {
              resolve();
            });
          })
          .catch((err) => {
            reject(err);
          });
      })
        .then(() => {
          const { viewport, _left, _top, node } = this.data;
          return {
            viewport,
            node,
            left: _left,
            top: _top,
          };
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getViewport() {
      return new Promise((resolve) => {
        const { windowWidth: width, windowHeight: height } = wx.getSystemInfoSync();
        resolve({
          viewport: { height, width },
        });
      });
    },
    getNode(selector, area) {
      return new Promise((resolve, reject) => {
        if (selector) {
          const query = wx.createSelectorQuery();
          if (area) {
            query.in(area);
          }
          query
            .select(selector)
            .boundingClientRect(({ left, top, height, width }) => {
              resolve({
                node: { left, top, height, width },
              });
            })
            .exec();
        } else {
          reject('getNode() 没有 selector');
        }
      });
    },
  },
});
