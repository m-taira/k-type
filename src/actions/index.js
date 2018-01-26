export const addCount = (v) => {
  console.log('call addCount')
  return {
    type: 'ADD',
    v
  }
}