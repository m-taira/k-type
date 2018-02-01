export const addCount = (v) => {
  return {
    type: 'ADD',
    v
  }
}

export const keyPress = (code) => {
  return {
    type: 'KEY_PRESS',
    code
  }
}

export const startCountdown = () => {
  return {
    type: 'START_COUNTDOWN'
  }
}

export const startGame = () => {
  return {
    type: 'START_GAME'
  }
}

export const correctType = (char) => {
  return {
    type: 'CORRECT',
    char
  }
}

export const loadSentences = (sentences) => {
  return {
    type: 'LOAD_SENTENCES',
    sentences
  }
}

export const nextSentence = () => {
  return {
    type: 'NEXT_SENTENCE'
  }
}

export const miss = () => {
  return {
    type: 'MISS'
  }
}

export const finish = () => {
  return {
    type: 'FINISH'
  }
}

export const returnTitle = () => {
  return {
    type: 'RETURN_TITLE'
  }
}

export const setMenu = (course) => {
  return {
    type: 'SET_MENU',
    course
  }
}

export const visibleMenu = () => {
  return {
    type: 'VISIBLE_MENU'
  }
}

export const hideMenu = () => {
  return {
    type: 'HIDE_MENU'
  }
}

export const pressedKey = (pressed_key) => {
  return {
    type: 'PRESS_KEY',
    pressed_key
  }
}