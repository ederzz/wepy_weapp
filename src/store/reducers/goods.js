import { handleActions } from 'redux-actions'
import { INIT_GOODS, ADD_GOOD, SUB_GOOD } from '../types/goods'
import { cloneDeep } from '../../common/utils'

const addGood = (goods, key) => {
  goods.forEach(current => {
    if (current.key === key) {
      current.ifShow = true
      current.purchaseNumber++
    }
  })
}

const addGoods = (state, key) => {
  addGood(state.hotGoods, key)
  addGood(state.defaultShelves, key)
  addGood(state.snacks, key)
  addGood(state.fastFood, key)
  return state
}

const subGood = (goods, key) => {
  goods.forEach(current => {
    if (current.purchaseNumber === 0) {
      return
    }
    if (current.key === key) {
      current.purchaseNumber--
      if (current.purchaseNumber === 0) {
        current.ifShow = false
      } 
    }
  })
}

const subGoods = (state, key) => {
  subGood(state.hotGoods, key)
  subGood(state.defaultShelves, key)
  subGood(state.snacks, key)
  subGood(state.fastFood, key)
  return state
}

export default handleActions({ 
  [INIT_GOODS] (state, { payload }) {
    return payload.data
  },
  [ADD_GOOD] (state, { payload }) {
    const data = cloneDeep(state)
    return addGoods(data, payload.key)
  }, 
  [SUB_GOOD] (state, {payload}) {
    const data = cloneDeep(state)
    return subGoods(data, payload.key)
  }
 }, {})