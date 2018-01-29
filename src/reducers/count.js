const count = (state = {}, action) => {
  switch(action.type){
    case 'ADD':
      return state + 1
    default:
      return state
  }
}

export default count