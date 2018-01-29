export const addCount = (v) => {
  console.log('call addCount')
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