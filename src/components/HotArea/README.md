### 自定义热区跳转组件，搭配`HotAreaImage`组件食用更好

#### 使用方式
1、页面配置中定义`usingComponents`字段：
```
  usingComponents: {
    hot_area: 'xxxx' // 组件路径
  }
```
2、`wxml`中使用:
```
<hot_area
    bindtogglevisiable="toggleAllHotAreaVisiable"
    show-hot-area="{{ allHotAreaVisiable }}"
    navigate-url="{{ item.navigateUrl }}"
    content="{{ item.content }}"
    position-x="{{ item.x }}"
    position-y="{{ item.y }}"></hot_area>
```

#### 参数说明

| 属性 | 说明 | 类型 | 默认值 |
| --- | ---- | ----- | ----- |
|  `position-x` | 热区距离容器左侧距离 | `Number` | |
|  `position-y` | 热区距离容器顶部距离 | `Number` | |
|  `content` | 热区文本内容 | `String` | `''` |
|  `navigate-url` | 热区跳转页面路径 | `String` | `''` |
|  `show-hot-area` | 判断热区是否处于显示状态，用于函数逻辑处理 | `Boolean` | `false` |
|  `bindtogglevisiable` | 绑定热区显示状态切换的自定义函数 | `Function` |  |
