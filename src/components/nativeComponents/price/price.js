Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        value: {
            type: Number,
            value: 0
        },
        markSize: {
            type: Number,
            value: 44
        },
        countSize: {
            type: Number,
            value: 44
        },
        decimalSize: {
            type: Number,
            value: 22
        }
    },
    data: {
        count: {
            type: String,
            value: '00'
        },
        decimal: {
            type: String,
            value: '00'
        }
    },
    attached() {
        const {
            value
        } = this.data

        this.setData({
            count: value.toFixed(2).split('.')[0],
            decimal: value.toFixed(2).split('.')[1]
        })
    },
    externalClasses: ['price-class']
})
