#### 描述
小程序原生组件，自定义多行省略组件，实现展开收起按钮效果~~

#### 使用方式
1、页面配置中定义`usingComponents`字段：
```
    usingComponents: {
        text_ellipsis: 'xxxx' // 组件路径
    }
```

2、页面引入
```
    <text_ellipsis
        text="{{ text }}"
        class-name="text-ellipsis"
        />
```

#### 参数说明
| 属性 | 说明 | 类型 | 默认值 |
|---- | -----|------| -----|
| `text` | 展示文本 | `String` |  |
| `class-name` | 外部样式类名 | `String` |  |
