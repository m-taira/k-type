import React, { Component } from 'react';
import Keysensor from '../components/Keysensor'
import image1 from '../images/1.png'
import flag from '../images/flag.png'
import line from '../images/line.png'
import { SCENE } from '../constants'
import goal from '../images/flag.png'

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
      height: '200px',
      width: '200px',
      position: 'relative',
      left: `${score}%`
    }
  }

  fukidashiStyle() {
    const { score } = this.props.game
    return {
      height: '50px',
      width: '200px',
      position: 'relative',
      left: `${score}%`,
      textAlign: 'center',
      lineHeight: 1.5,
      fontSize: '1.3rem'
    }
  }

  progressBoxStyle() {
    return {
      height: '200px',
      backgroundImage: `url('${line}')`,
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'repeat-x'
    }
  }

  goalBoxStyle() {
    return {
      height: '200px',
      backgroundImage: `url('${goal}')`,
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'repeat-x'
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

  renderFukidashi() {
    const { game } = this.props

    if(game.pressed_key.length === 0) {
      return
    }

    return (
      <div className="balloon2" style={this.fukidashiStyle()}>
        <p>{
          game.pressed_key.map((k) => {
            return k
          })
        }</p>
      </div>
    )
  }

  render() {
    const { onKeyPress, onKeyDown, game } = this.props
    return (
      <Keysensor onKeyPress={onKeyPress} onKeyDown={onKeyDown}>
        <div className="game-main-area">
          { this.renderGoal() }
          { this.renderMondai() }
        </div>

        <div className="game-sub-area">
          <div className="panel-area">
            <div className="fukidasi-area">
              <div className="fukidasi-box">
                { this.renderFukidashi() }
              </div>
              <div className="fukidasi-goal" style={ { width: '100px' } }>
              </div>
            </div>

            <div className="progress-area" style={this.progressBoxStyle()}>
              <div className="character-box">
                <img className="App-logo image" src={game.character} style={this.imageStyle()}/>
              </div>
              <div className="goal-box" style={this.goalBoxStyle()}>
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
             <div className="result-box2">
             <p className="result-body2">{
             game.pressed_key.map((k) => {
             return k
             })
             }</p>
             </div>

             */}
            {/*
             <div className="result-box2">
             <p className="result-title3">ミス</p>
             <p className="result-body3">{game.miss}</p>
             </div>
             */}
          </div>
        </div>
      </Keysensor>
    )
  }
}

export default Mondai