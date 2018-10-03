Component({
    properties: {
        content: {
            type: String
        },
        positionX: {
            type: Number
        },
        positionY: {
            type: Number
        },
        navigateUrl: {
            type: String
        },
        showHotArea: {
            type: Boolean,
            value: true
        }
    },
    data: {
        loadStart: false
    },
    methods: {
        toggleVisible() {
            this.triggerEvent('togglevisiable')
        },
        navigate() {
            if (this.data.showHotArea) {
                wx.navigateTo({
                    url: this.data.navigateUrl
                })
            }
        }
    },
    ready() {
        const intersectionObj = this.createIntersectionObserver()
        intersectionObj.relativeToViewport().observe('.hot__area__wrapper', res => {
            if (this.data.loadStart) {
                return
            }
            this.setData({
                'loadStart': true
            }, () => {
                console.log('加载动画开始')
            })
        })
    },
    externalClasses: ['image-class']
})
