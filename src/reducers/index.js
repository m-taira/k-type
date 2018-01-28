import count from './count'
import code from './code'
import scene from './scene'
import entered from './entered'
import unentered from './unentered'
import { combineReducers } from 'redux'
import { SCENE } from '../constants/index'


export const initialState = {
  count: 0,
  code: 'initial',
  scene: SCENE.title,
  entered: '',
  unentered: ''
}

const reducer = combineReducers(
  {
    scene,
    count,
    code,
    entered,
    unentered,
  }
)

export default reducer