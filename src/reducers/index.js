const initialState = {
  count: 0,
  code: 'initial'
}

const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'ADD':
      return { count: state.count + 1, code: state.code}
    case 'KEY_PRESS':
      return { count: state.count, code: action.code}
    default:
      return state
  }
}

export default reducer