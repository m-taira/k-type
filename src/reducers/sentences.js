const sentences = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'LOAD_SENTENCES':
      return action.sentences
    default:
      return state
  }
}

export default sentences