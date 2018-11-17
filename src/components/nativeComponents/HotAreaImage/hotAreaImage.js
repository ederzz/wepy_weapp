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
        },
        imgId: {
            type: String
        },
        hotAreaWidth: {
            type: Number,
            value: 700
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
            // 到达load-confition设置位置，加载图片
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
            // 进入可视区域加载图片热点组件
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
    externalClasses: ['img-class']
})
