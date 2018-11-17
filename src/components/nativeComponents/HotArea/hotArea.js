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
        },
        areaWidth: {
            type: Number,
            value: 700
        },
        isTabPage: {
            type: Boolean,
            value: false
        }
    },
    data: {
        loadStart: false,
        firstPos: 0,
        secondPos: 0,
        thirdPos: 0,
    },
    methods: {
        toggleVisible() {
            this.triggerEvent('togglevisiable')
        },
        navigate() {
            const {
                showHotArea,
                navigateUrl,
                isTabPage
            } = this.data
            if (showHotArea) {
                if (isTabPage) {
                    wx.switchTab({
                        url: navigateUrl
                    })
                } else {
                    wx.navigateTo({
                        url: navigateUrl
                    })
                }
            }
        }
    },
    ready() {
        const { areaWidth } = this.data
        this.setData({
            firstPos: (areaWidth / 3).toFixed(2),
            secondPos: (areaWidth / 2).toFixed(2),
            thirdPos: (areaWidth / 3 * 2).toFixed(2)
        })

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
