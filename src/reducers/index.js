import count from './count'
import code from './code'
import scene from './scene'
/*
import entered from './entered'
import unentered from './unentered'
import sentences from './sentences'
import current_sentence from './current_sentence'*/
import game from './game'
import miss from './miss'
import { combineReducers } from 'redux'
import { SCENE } from '../constants/index'


export const initialState = {
  count: 0,
  code: 'initial',
  scene: SCENE.title,
  game: {
    entered: '',
    unentered: '',
    sentences: [],
    current_sentence: undefined
  },
  miss: 0
}

const reducer = combineReducers(
  {
    scene,
    count,
    code,
    game,
    miss
  }
)

export default reducer