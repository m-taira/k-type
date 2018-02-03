import React, { Component } from 'react';
import Keysensor from '../components/Keysensor'
import image1 from '../images/1.png'
import flag from '../images/flag.png'
import line from '../images/line.png'
import { SCENE } from '../constants'

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

  imageStyle() {
    const { score } = this.props.game
    return {
      height: '100px',
      width: '100px',
      position: 'relative',
      left: `${score}%`
    }
  }

  progressBoxStyle() {
    return {
      backgroundImage: `url('${line}')`,
    }
  }

  renderGoal() {
    const { scene } = this.props

    if (scene === SCENE.goal) {
      return (
        <p className="goal">ゴール</p>
      )
    }
  }

  renderMondai() {
    const { scene, game } = this.props
    if (scene === SCENE.playing) {
      return (
        <div>
          <p className="kanji">{game.current_sentence.kanji}</p>

          <p className="roma">
            <span className="entered">{game.entered}</span><span
            className="unentered">{game.unentered}</span>
          </p>
        </div>
      )
    }
  }

  render() {
    const { onKeyPress, onKeyDown, game } = this.props
    return (
      <Keysensor onKeyPress={onKeyPress} onKeyDown={onKeyDown}>
        <div className="main-area">
          { this.renderGoal() }
          { this.renderMondai() }
        </div>

        <div className="sub-area">
          <div className="panel-area">
            <div className="progress-area" style={this.progressBoxStyle()}>
              <div className="character-box">
                <img className="App-logo image" src={game.character} style={this.imageStyle()}/>
              </div>
              <div className="goal-box">
                <img src={flag} className="image"/>
              </div>
            </div>
            {/*
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
            */}
            <div className="result-box2">
              <p className="result-body2">{
                game.pressed_key.map((k) => {
                  return k
                })
              }</p>
            </div>


            <div className="result-box2">
            <p className="result-title3">ミス</p>
              <p className="result-body3">{game.miss}</p>
            </div>
          </div>
        </div>
      </Keysensor>
    )
  }
}

export default Mondai