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