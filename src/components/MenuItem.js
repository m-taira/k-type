import React, { Component } from 'react';

const MenuItem = (props) => {
  const { menu, actions, course, selected } = props

  const itemStyle = {
    cursor: 'pointer',
    fontWeight: selected ? 'bold' : ''
  }

  const handleClick = () => {
    actions.setMenu(course)
  }

  return (
    <li onClick={handleClick} style={itemStyle}>{menu.title}</li>
  )
}

export default MenuItem