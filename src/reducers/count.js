const count = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'ADD':
      return state + 1
    default:
      return state
  }
}

export default count