import wepy from 'wepy'

export default class scanMixins extends wepy.mixin {
  data = {
    toastText: '我是toast.',
    toastShow: false
  }
  methods = {
    scan() {
      const self = this
      wepy.scanCode({
        scanType: ['qrCode'],
        success(...res) {
          console.log(res)
          self.toastText = '我现在不想卖东西给你~~'
          self.toastShow = true
          self.$apply()
          setTimeout(() => {
            self.toastShow = false
            self.$apply()
          }, 2000)
        },
        fail() {
          // 请从便利店后加上
          self.toastText = '请从便利店货架上扫描二维码~~'
          self.toastShow = true
          self.$apply()
          setTimeout(() => {
            self.toastShow = false
            self.$apply()
          }, 2000)
        }
      })
    }
  }
}
