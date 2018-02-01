import _ from 'lodash'
const game = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return Object.assign({}, state, { course: action.course } )
    case 'START_GAME':
      return Object.assign({}, state, { entered: '', current_sentence: state.sentences[0], unentered: state.sentences[0].roma, miss: 0, result: [], pressed_key: []})
    case 'CORRECT':
      return Object.assign({}, state, { entered: `${state.entered}${action.char}`, unentered: state.unentered.slice(1) })
    case 'NEXT_SENTENCE':
      const next_sentence = _.sample(state.sentences)
      const new_result = state.result.concat([state.miss])
      return Object.assign({}, state, { current_sentence: next_sentence, entered: '', unentered: next_sentence.roma, miss: 0, result: new_result, pressed_key: []})
    case 'LOAD_SENTENCES':
      return Object.assign({}, state, { sentences: action.sentences })
    case 'MISS':
      return Object.assign({}, state, { miss: state.miss + 1})
    case 'PRESS_KEY':
      return Object.assign({}, state, { pressed_key: state.pressed_key.concat(action.pressed_key)})

    default:
      return state
  }
}

export default game