import count from './count'
import code from './code'
import scene from './scene'
import { combineReducers } from 'redux'
import { SCENE } from '../constants/index'


export const initialState = {
  count: 0,
  code: 'initial',
  scene: SCENE.title
}

const reducer = combineReducers(
  {
    scene,
    count,
    code,
  }
)

export default reducer