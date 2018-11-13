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
        productId: {
            type: Number
        },
        areaWidth: {
            type: Number,
            value: 710
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
                content,
                productId
            } = this.data
            if (showHotArea && productId) {
                wx.navigateTo({
                    url: `${this.data.navigateUrl}?productId=${productId || ''}&type=JY&productType=product`
                })
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
