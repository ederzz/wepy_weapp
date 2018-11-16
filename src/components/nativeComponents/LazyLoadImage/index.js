Component({
    options: {
        addGlobalClass: true
    },
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
        show: false,
        bgColor: 'red'
    },
    ready() {
        this.setData({
            bgColor: `hsl(${360 * Math.random()}, ${25 + 65 * Math.random()}%, ${65 + 25 * Math.random()}%)`
        })
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
