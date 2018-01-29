const game = (state = {}, action) => {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, { entered: '', current_sentence: 0, unentered: state.sentences[0].roma})
    case 'CORRECT':
      return Object.assign({}, state, { entered: `${state.entered}${action.char}`, unentered: state.unentered.slice(1) })
    case 'NEXT_SENTENCE':
      const next_sentence = (state.current_sentence === undefined) ? 0 : state.current_sentence + 1
      return Object.assign({}, state, { current_sentence: next_sentence, entered: '', unentered: state.sentences[next_sentence].roma})
    case 'LOAD_SENTENCES':
      return Object.assign({}, state, { sentences: action.sentences })

    default:
      return state
  }
}

export default game