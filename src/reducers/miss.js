const miss = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'MISS':
      return state + 1
    case 'START_GAME':
      return 0
    default:
      return state
  }
}

export default miss