Component({
  properties: {
    imgSrc: {
      type: String,
      value: ''
    },
    loadCondition: {
      type: Object,
      value: {
        bottom: 100
      }
    },
    hotAreaConfig: {
        type: Object,
        value: []
    },
    imageMode: {
        type: String,
        value: 'aspectFill'
    }
  },
  data: {
    show: false,
    allHotAreaVisiable: true,
    loadHotAreas: false
  },
  methods: {
    toggleAllHotAreaVisiable() {
        const visiable = !this.data.allHotAreaVisiable
        this.setData({
            allHotAreaVisiable: visiable
        })
    }
  },
  ready() {
    const { loadCondition } = this.data
    const intersectionObj = this.createIntersectionObserver()
    const intersectionObj1 = this.createIntersectionObserver()
    intersectionObj.relativeToViewport(loadCondition).observe('.custom__img', res => {
        if (this.data.show) {
            return
        }
        this.setData({
            'show': true
        }, () => {
            console.log('加载图片')
        })
    })
    intersectionObj1.relativeToViewport().observe('.custom__img', res => {
        if (this.data.loadHotAreas) {
            return
        }
        this.setData({
            'loadHotAreas': true
        }, () => {
            console.log('加载内容热点')
        })
    })
  },
  externalClasses: ['image-class']
})
