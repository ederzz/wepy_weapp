Component({
    data: {
        rightClass: {
            type: String
        },
        leftClass: {
            type: String
        },
        botClass: {
            type: String
        },
        topClass: {
            type: String
        },
        rightTimer: {
            type: Object
        },
        leftTimer: {
            type: Object
        },
        botTimer: {
            type: Object
        },
        topTimer: {
            type: Object
        }
    },
    methods: {
        runRight() {
            this.setData({
                rightClass: 'run',
                leftClass: 'red',
                botClass: 'yellow passive',
                topClass: 'yellow passive',
            })

            const t = setInterval(() => {
                this.runBot()
                clearInterval(t)
            }, 500)
        },
        runBot() {
            this.setData({
                rightClass: 'green passive',
                leftClass: 'green passive',
                botClass: 'run',
                topClass: 'yellow',
            })

            const t = setInterval(() => {
                this.runLeft()
                clearInterval(t)
            }, 500)
        },
        runLeft() {
            this.setData({
                rightClass: 'green',
                leftClass: 'run',
                botClass: 'blue passive',
                topClass: 'blue passive',
            })

            const t = setInterval(() => {
                this.runTop()
                clearInterval(t)
            }, 500)
        },
        runTop() {
            this.setData({
                rightClass: 'red passive',
                leftClass: 'red passive',
                botClass: 'blue',
                topClass: 'run',
            })

            const t = setInterval(() => {
                this.runRight()
                clearInterval(t)
            }, 500)
        },
    },
    ready() {
        this.runRight()
    },
  })
