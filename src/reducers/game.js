import _ from 'lodash'
import { CHARACTERS } from '../constants'

const game = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return Object.assign({}, state, { course: action.course } )
    case 'START_GAME':
      const character = _.sample(CHARACTERS)
      return Object.assign({}, state, { entered: '', current_sentence: state.sentences[0], unentered: state.sentences[0].roma, miss: 0, result: [], pressed_key: [], score: 0, character})
    case 'CORRECT':
      let score = state.score + 1
      return Object.assign({}, state, { entered: `${state.entered}${action.char}`, unentered: state.unentered.slice(1), score: score })
    case 'NEXT_SENTENCE':
      const next_sentence = _.sample(state.sentences)
      const new_result = state.result.concat([state.miss])
      return Object.assign({}, state, { current_sentence: next_sentence, entered: '', unentered: next_sentence.roma, result: new_result, pressed_key: []})
    case 'LOAD_SENTENCES':
      return Object.assign({}, state, { sentences: action.sentences })
    case 'MISS':
      score = state.score - 1
      return Object.assign({}, state, { miss: state.miss + 1, score: (score < 0 ? 0 : score)} )
    case 'PRESS_KEY':
      const pressed_key = state.pressed_key.concat(action.pressed_key).slice(-10)
      return Object.assign({}, state, { pressed_key: pressed_key})
    case 'FINISH':
      return Object.assign({}, state, {score: 0})
    default:
      return state
  }
}

export default game