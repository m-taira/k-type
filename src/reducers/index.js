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
import visible_menu from './visible_menu'
import { combineReducers } from 'redux'
import { SCENE } from '../constants/index'


export const initialState = {
  count: 0,
  code: 'initial',
  scene: SCENE.title,
  visible_menu,
  game: {
    course: "1",
    entered: '',
    unentered: '',
    sentences: [],
    current_sentence: undefined,
    miss: 0,
    result: [],
    pressed_key: '',
    score: 0,
    character: 0,
  },
  miss: 0
}

const reducer = combineReducers(
  {
    scene,
    count,
    code,
    game,
    miss,
    visible_menu
  }
)

export default reducer