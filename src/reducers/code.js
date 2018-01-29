const code = (state = {}, action) => {
  switch(action.type){
    case 'KEY_PRESS':
      return action.code
    default:
      return state
  }
}

export default code