const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'ADD':
      return { count: state.count + 1 }
    default:
      return state
  }
}

export default reducer