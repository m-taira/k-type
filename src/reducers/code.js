const code = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'KEY_PRESS':
      return action.code
    default:
      return state
  }
}

export default code