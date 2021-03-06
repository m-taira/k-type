import React, { Component } from 'react';

class Keysensor extends Component {
  componentDidMount(){
    this.keyPressContainer.focus()
  }

  focusStyle() {
    return {
      outline: 1,
      width: '100%',
      height: '100%',
    }
  }

  render() {
    const { onKeyDown, onKeyPress, onKeyUp, children } = this.props
    return (
      <div onKeyPress={onKeyPress} onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0" style={this.focusStyle()} ref={(input) => {
        this.keyPressContainer = input
      }}>
        {children}
      </div>
    )
  }
}

export default Keysensor