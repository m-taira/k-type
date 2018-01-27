import count from './count'
import code from './code'
import { combineReducers } from 'redux'


export const initialState = {
  count: 0,
  code: 'initial'
}

const reducer = combineReducers(
  {
    count,
    code
  }
)

export default reducer