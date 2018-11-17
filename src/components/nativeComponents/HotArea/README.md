### 自定义热区跳转组件，搭配`HotAreaImage`组件食用更好

#### 使用方式
1、页面配置中定义`usingComponents`字段，或者在自定义组件配置文件中定义：
```
  usingComponents: {
    hot_area: 'xxxx' // 组件路径
  }
```
2、`wxml`中使用:
```
<hot_area
    area-width="{{ 700 }}"
    is-tab-page="{{ true }}"
    show-hot-area="{{ allHotAreaVisiable }}"
    navigate-url="{{ item.navigateUrl }}"
    content="{{ item.content }}"
    position-x="{{ item.x }}"
    position-y="{{ item.y }}"></hot_area>
```

#### 参数说明

| 属性 | 说明 | 类型 | 默认值 |
| --- | ---- | ----- | ----- |
|  `position-x` | 热区距离布局区域左侧距离 | `Number` | |
|  `position-y` | 热区距离布局区域顶部距离 | `Number` | |
|  `content` | 热区文本内容 | `String` | `''` |
|  `navigate-url` | 热区点击跳转页面路径 | `String` | `''` |
|  `show-hot-area` | 判断热区是否处于显示状态 | `Boolean` | `false` |
|  `area-width` | 热区布局区域宽度设置，单位为`rpx`，建议和图片宽度相同，即保证布局区域和图片大小相同 | `Number` | 700 | 
|  `is-tab-page` | 判断跳转页面路径是否为tab页，用于函数逻辑判断 | `Boolean` | `false` | 
