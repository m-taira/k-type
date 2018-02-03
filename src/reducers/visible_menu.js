const visible_menu = (state = {}, action) => {
  switch(action.type){
    case 'VISIBLE_MENU':
      return true
    case 'HIDE_MENU':
      return false
    default:
      return state
  }
}

export default visible_menu