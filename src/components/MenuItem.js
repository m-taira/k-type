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

  const menuClass = () => {
    if(selected === true) {
      return 'menu-item selected'
    } else {
      return 'menu-item'
    }
  }

  return (
    <p className={menuClass()} onClick={handleClick}>{menu.title}</p>
  )
}

export default MenuItem