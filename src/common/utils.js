import wepy from 'wepy'

const baseUrl = 'https://www.easy-mock.com/mock/5b4f21b18ffd5b3da8120753/kaola'

export const request = ({
  url,
  options = {}
}) => wepy.request({
    url: `${baseUrl}${url}`,
    ...options
  })

export const cloneDeep = obj => JSON.parse(JSON.stringify(obj))
