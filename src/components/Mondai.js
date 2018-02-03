import * as React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';


const focusStyle = () => {
  return {
    outline: 1,
    width: '100%'
  }
}

const Mondai = ({ count, code, onKeyPress, onClick }) => {
  return (
    <div className="App" onKeyPress={onKeyPress} tabIndex="0" style={focusStyle()}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={onClick}>{count}</button>
      <p>{code}</p>
      <Link to='/title'>戻る</Link>
    </div>
  )
}

export default Mondai