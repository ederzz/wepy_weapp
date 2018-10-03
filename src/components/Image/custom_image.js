Component({
  properties: {
    imgSrc: {
      type: String,
      value: ''
    },
    loadCondition: {
      type: Object,
      value: {
        bottom: 20
      }
    },
    imageMode: {
        type: String,
        value: 'aspectFill'
    }
  },
  data: {
    show: false
  },
  ready() {
    const { loadCondition } = this.data
    const intersectionObj = this.createIntersectionObserver()
    intersectionObj.relativeToViewport(loadCondition).observe('.custom__img', res => {
        if (!this.data.show) {
            this.setData({
                'show': true
            }, () => {
                console.log('加载图片')
            })
        }
    })
  },
  externalClasses: ['image-class']
})
