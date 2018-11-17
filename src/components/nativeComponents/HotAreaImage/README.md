### 自定义懒加载image组件(带热区跳转)

#### 使用方式

1、页面配置中定义`usingComponents`字段：

```
  usingComponents: {
    custom_image: 'xxxx' // 组件路径
  }
```

2、`wxml`中使用:

```
<custom_image
    load-condition="{{loadCondition}}"
    image-class="my__image"
    img-mode="aspectFit"
    hot-area-config="{{ hotAreaConfig }}"
    hot-area-width="{{ 700 }}"
    img-src="{{imgSrc}}"></custom_image>
```

#### 参数说明

| 属性              | 说明                                                                                                                                                                          | 类型     | 默认值            |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------|
| `load-condition`  | 懒加载加载条件，可以参考[IntersectionObserver.relativeToViewport api](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html) | `Object` | `{ bottom: 100 }`              |
| `img-class`       | `image`外部类名，可用于定制样式                                                                                                                                               | `String` |  |
| `img-src`         | 加载图片`src`链接                                                                                                                                                             | `String` |               |
| `img-mode`        | 同普通`image`组件`mode`属性                                                                                                                                                   | `String` | `aspectFill`      |
| `hot-area-width`        | 配置图片内热点区域布局宽度`width`，建议和图片设置宽度相同（这样可保证热点布局区域大小和image大小相同），单位为`rpx` | `Number` | 700      |
| `hot-area-config` | 图片内热点区域配置                                                                                                                                                            | `Array`  
|                   |

#### 单个`hot-area-config`对象示例
```
            {
                content: '我是content1', // 热点内容
                x: 20, // 热点距离布局区域左侧距离
                y: 100, // 热点距离布局区域顶侧距离
                navigateUrl: '/pages/search' // 热点跳转页面
            }
```
