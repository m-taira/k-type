const current_sentence = (state = -1, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'NEXT_SENTENCE':
      console.log('next sentence')
      console.log(state)
      return (state === -1) ? 0 : state + 1
    default:
      return state
  }
}

export default current_sentence