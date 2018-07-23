import { request } from '@/common/utils.js'

export const getHotGoods = () => request({
  url: `/goods_list`
})