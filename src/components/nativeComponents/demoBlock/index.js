Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        title: {
            type: String
        },
        content: {
            type: String
        },
        navUrl: {
            type: String
        }
    },
    data: {
        bgColor: {
            type: String
        }
    },
    methods: {
        navigateDemo() {
            if (this.data.navUrl) {
                wx.navigateTo({
                    url: this.data.navUrl
                })
            }
        }
    },
    ready() {
        const cssHSL = `hsl(${360 * Math.random()}, ${25 + 65 * Math.random()}%, ${65 + 25 * Math.random()}%)`
        this.setData({
            bgColor: cssHSL
        })
    },
    externalClasses: ['block-class']
  })
