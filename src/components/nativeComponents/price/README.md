#### 描述
小程序原生组件，自定义价格组件，常用于商品价格展示，dollar符、价格整数部分、价格小数部分字体大小可不同，但保持底部对齐

#### 使用方式
1、页面配置中定义`usingComponents`字段：
```
    usingComponents: {
        price: 'xxxx' // 组件路径
    }
```

2、页面引入
```
    <price
        value="{{ value }}"
        mark-size="{{ 22 }}"
        count-size="{{ 44 }}"
        decimal-size="{{ 22 }}"
        price-class="price"
        />
```

#### 参数说明
| 属性 | 说明 | 类型 | 默认值 |
|---- | -----|------| -----|
| value | 展示价格 | Number | 0 |
| `mark-size` | dollar符号`font-size`，单位为`rpx`  | `Number` | 44 |
| `count-size` | 价格整数部分`font-size`，单位为`rpx` | `Number` | 44 |
| `decimal-size` | 价格小数部分`font-size`，单位为`rpx` | `Number` | 22 |
| `price-class` | 外部`class`名称 | `String`|  |
