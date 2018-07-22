import { request } from '@/common/utils.js'

export const getHotGoods = ({
  limit = 10,
  offset = 0
}) => request({
  url: `/hotGoods?limit=${limit}&offset=${offset}`
})