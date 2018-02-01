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
      fontSize: '3.5rem',
      margin: 0
    }
  }

  render() {
    const { onKeyPress, onKeyDown, game } = this.props
    return (
      <Keysensor onKeyPress={onKeyPress} onKeyDown={onKeyDown}>
        <div className="main-area">
          <p className="kanji">{game.current_sentence.kanji}</p>

          <p className="roma">
            <span className="entered">{game.entered}</span><span
            className="unentered">{game.unentered}</span>
          </p>
        </div>
        <div className="sub-area">
          <div className="panel-area">
            <div className="result-box">
            <p className="result-title">結果</p>
            <p className="result-body">
              {
                game.result.map((r) => {
                  return <span>{(r == 0 ? '◯' : '×')}</span>
                })
              }
            </p>
            </div>
            <div className="result-box2">
              <p className="result-title2">押したキー</p>
              <p className="result-title2">間違った数</p>
              <p className="result-body2">{
                game.pressed_key.map((k) => {
                  return k
                })
              }</p>
              <p className="result-body2">{game.miss}</p>
            </div>
          </div>
        </div>
      </Keysensor>
    )
  }
}

export default Mondai