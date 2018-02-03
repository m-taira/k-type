import { SCENE } from '../constants/'
const scene = (state = {}, action) => {
  switch(action.type){
    case 'START_COUNTDOWN':
      return SCENE.countdown
    case 'START_GAME':
      return SCENE.playing
    case 'FINISH':
      return SCENE.result
    case 'RETURN_TITLE':
      return SCENE.title
    case 'GOAL':
      return SCENE.goal
    default:
      return state
  }
}

export default scene