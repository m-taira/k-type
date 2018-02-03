import * as React from 'react'
import MenuItem from './MenuItem'
import sentence from '../sentence.json'

/**
 * 戻るボタンのコンポーネント
 * @param props
 * @returns ReactElement
 */
const Menu = (props) => {
  const { actions, current_course } = props

  const listStyle = {
    listStyleType: 'none'
  }
  return (
    <ul style={listStyle}>
      {
        Object.keys(sentence).map((k) => {
          return(<MenuItem course={k} menu={sentence[k]} actions={actions} selected={k === current_course}></MenuItem>)
        })

      }
    </ul>
  )
}

export default Menu
