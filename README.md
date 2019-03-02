#### wepy_weapp
`wepy`微信小程序，存放一些小demo

#### 已有demo
 - LOADING加载动画
 - price组件
 - echarts使用demo
 - 通过腾讯位置服务解析坐标位置
 - [多行省略组件](./src/components/nativeComponents/EllipsisText/README.md)
 - [懒加载图片组件](./src/components/nativeComponents/LazyLoadImage/README.md)
 - [带热区跳转的图片组件](./src/components/nativeComponents/HotAreaImage/README.md)

#### wepy小程序案例
[仓库地址](https://github.com/shenyiling/weapp_github)

#### echarts使用介绍
一、原生小程序使用方式  
1.将`echarts`图表的定义逻辑放置到微信小程序原生组件中，可以参考项目里的`/components/nativeComponents/HeNanMapChart`和`/components/nativeComponents/SunburstChart`组件 

2.在wepy页面文件中引入组件后直接使用
```Javascript
export default class Charts extends wepy.page {
    config = {
        navigationBarTitleText: 'Charts',
        usingComponents: {
            map_chart: '../components/nativeComponents/HeNanMapChart/index'
        }
    }
}
```

```Html
<view style="width: 750rpx;height: 750rpx;">
    <map_chart />
</view>
```

二、wepy组件或页面中定义图表逻辑  
1.`wepy`页面文件首先引入`ec-canvas`组件 
```Javascript
usingComponents: {
    ec_canvas: '../components/charts/ec-canvas/ec-canvas'
}
```

2.直接在页面中使用`ec-canvas`组件
```Html
 <view class="line__chart">
    <ec_canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}" bind:init="echartInit"></ec_canvas>
</view>
```
再定义`ec`，`echartInit`用于图表渲染，`ec`放置个空对象就好，`echartInit`才是实际渲染图表的函数
```Javascript
export default class LineChart extends wepy.page {
    data = {
        ec: {}
    }

    methods = {
        echartInit (e) {
            this.initChart(e.detail.canvas, e.detail.width, e.detail.height)
        }
    }

    initChart(canvas, width, height) {
        const chart = echarts.init(canvas, null, {
            width: width,
            height: height
        })
        canvas.setChart(chart)

        const option = {
            // option按照echarts的配置填
        }

        chart.setOption(option)
        return chart
    }
}
```

三、将`ec-canvas`组件抽离成`wepy的组件`，可以[参考](https://github.com/ecomfe/echarts-for-weixin/issues/7#issuecomment-371692664)，这里就不累述了