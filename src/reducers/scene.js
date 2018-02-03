import { SCENE } from '../constants/'
const scene = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'START_COUNTDOWN':
      return SCENE.countdown
    case 'START_GAME':
      return SCENE.playing
    case 'END_GAME':
      return SCENE.result
    default:
      return state
  }
}

export default scene