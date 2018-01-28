const unentered = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'START_GAME':
      return 'ABCDEFG'
    case 'CORRECT':
      return state.slice(1)
    default:
      return state
  }
}

export default unentered