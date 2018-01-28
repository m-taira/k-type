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
      color: '333333',
      fontSize: '3.5rem'
    }
  }

  render() {
    const { count, code, onKeyPress, onClick, entered, unentered } = this.props
    return (
      <Keysensor onKeyPress={onKeyPress}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onClick}>{count}</button>
        <p>{code}</p>
        <span style={this.enteredStyle()}>{entered}</span><span style={this.unenteredStyle()}>{unentered}</span>
      </Keysensor>
    )
  }
}

export default Mondai