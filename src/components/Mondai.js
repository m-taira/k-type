import React, { Component } from 'react';
import Keysensor from '../components/Keysensor'
import logo from '../logo.svg';

class Mondai extends Component {

  focusStyle() {
    return {
      outline: 1,
      width: '100%'
    }
  }

  enteredStyle() {
    return {
      color: '#cccccc',
      fontSize: '3.5rem'
    }
  }

  unenteredStyle() {
    return {
      color: '#333333',
      fontSize: '3.5rem'
    }
  }

  mondaiStyle() {
    return {
      fontSize: '3.5rem'
    }
  }

  render() {
    const { onKeyPress, entered, unentered, kanji, onKeyDown, game } = this.props
    return (
      <Keysensor onKeyPress={onKeyPress} onKeyDown={onKeyDown}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p style={this.mondaiStyle()}>{game.current_sentence.kanji}</p>
        <span style={this.enteredStyle()}>{game.entered}</span><span style={this.unenteredStyle()}>{game.unentered}</span>
        <p>{game.miss}</p>
        <p>
        {
          game.result.map((r) => {
            return <span>{r}</span>
          })
        }
        </p>
      </Keysensor>
    )
  }
}

export default Mondai