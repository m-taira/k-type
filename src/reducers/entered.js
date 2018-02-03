const entered = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'START_GAME':
      return ''
    case 'CORRECT':
      return `${state}${action.char}`
    default:
      return state
  }
}

export default entered