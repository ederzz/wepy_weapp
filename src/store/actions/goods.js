import { createAction } from 'redux-actions'
import * as at from '../types'
import { getHotGoods } from '../../service'

export const initGoods = createAction(at.INIT_GOODS, async () => {
  const { data } = await getHotGoods()
  data.hotGoods = data.hotGoods.map(current => Object.assign(
    {},
    current,
    {
      purchaseNumber: 0,
      ifShow: false
    }
  ))
  data.defaultShelves = data.defaultShelves.map(current => Object.assign(
    {},
    current,
    {
      purchaseNumber: 0,
      ifShow: false
    }
  ))
  data.snacks = data.snacks.map(current => Object.assign(
    {},
    current,
    {
      purchaseNumber: 0,
      ifShow: false
    }
  ))
  data.fastFood = data.fastFood.map(current => Object.assign(
    {},
    current,
    {
      purchaseNumber: 0,
      ifShow: false
    }
  ))
  return { data }
})

export const addGood = createAction(at.ADD_GOOD, key => ({ key }))
export const subGood = createAction(at.SUB_GOOD, key => ({ key }))