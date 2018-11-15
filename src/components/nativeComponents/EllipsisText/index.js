Component({
    properties: {
        text: {
            type: String,
            value: ''
        },
    },
    data: {
        animateTime: 100, // 动效持续
        isExpand: false,
        hasEllipsis: false,
        increaseH: {},
        decreaseH: {},
        contentH: 0,
        containerH: 0
    },
    methods: {
        expand() {
            console.log(this.data.isExpand)
            this.setData({
                isExpand: true
            }, () => {
                const {
                    contentH,
                    animateTime
                } = this.data
                const increaseH = wx.createAnimation({
                    transformOrigin: '50% 50%',
                    duration: animateTime,
                    timingFunction: 'ease-in',
                    delay: 0
                })
                increaseH.height(contentH).step()
                this.setData({
                    increaseH: increaseH.export()
                })
            })
        },
        collapse() {
            const {
                containerH,
                animateTime
            } = this.data

            const decreaseH = wx.createAnimation({
                transformOrigin: '50% 50%',
                duration: animateTime,
                timingFunction: 'ease-in',
                delay: 0
            })

            decreaseH.height(containerH).step()
            this.setData({
                increaseH: decreaseH.export()
            }, () => {
                setTimeout(() => {
                    this.setData({
                        isExpand: false
                    })
                }, animateTime)
            })
        },
    },
    ready() {
        console.log(this.data.isExpand)
        const query = this.createSelectorQuery()
        query.select(".ellipsis-content").boundingClientRect()
        query.select(".ellipsis-container").boundingClientRect()
        query.exec(res => {
            const [
                {
                    height: contentH
                },
                {
                    height: containerH
                },
            ] = res
            if (containerH < contentH) {
                this.setData({
                    hasEllipsis: true,
                    contentH,
                    containerH
                })
            } else {

            }
        })
    }
})
