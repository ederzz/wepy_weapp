import { handleActions } from 'redux-actions'
import { GET_HOT_GOODS } from '../types/goods'
import { goodsData } from '../../mock'
console.log(goodsData, '======')

export default handleActions({ }, goodsData)