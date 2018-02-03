import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Countdown from 'react-countdown-now'
import Mondai from '../components/Mondai'
import { SCENE } from '../constants'
import sentence from '../sentence.json'
class game extends Component {

  componentWillMount() {
    this.loadSentences()
  }

  loadSentences(){
    const { actions, game } = this.props
    actions.loadSentences(sentence[game.course].sentences)
  }

  componentWillReceiveProps(nextProps) {
    const { actions, history, scene, game } = nextProps

    if(scene === SCENE.result) {
      history.push('/title')
    }

    if(game.score >= 100) {
      actions.goal()
    }
  }

  handleAddButton() {
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e) {
    const { actions, game, scene } = this.props
    e.preventDefault()
    if(scene === SCENE.goal) {
      return
    }

    if(e.charCode === 32) {
      return
    }
    const currentChar = game.unentered.charAt(0)
    const currentCode = currentChar.toLowerCase().charCodeAt(0)

    if(e.charCode === currentCode) {
      actions.correctType(currentChar)
    } else {
      actions.miss()
    }
    const char =  String.fromCharCode(e.charCode).toUpperCase()
    actions.pressedKey(char)
  }

  handlekeyDown(e) {
    const { actions, game } = this.props
    if(e.keyCode === 32 && game.unentered === '') {
      actions.nextSentence()
    }

    if(e.keyCode === 27) {
      actions.finish()
    }
  }

  handleTimeComplete() {
    const { actions } = this.props
    actions.startGame()
  }

  renderer({ hours, minutes, seconds, completed }) {
    const { scene, game } = this.props
    if (completed || scene === SCENE.playing || scene === SCENE.goal) {
      return (<Mondai
          game={game}
          scene={scene}
          onClick={this.handleAddButton.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onKeyDown={this.handlekeyDown.bind(this)}
        />
      )
    } else {
      return (
        <p className="countdown">{seconds}</p>
      )

    }
  }

  render() {
    return (
      <Countdown
        zeroPadLength={1}
        date={Date.now() + 1000}
        renderer={this.renderer.bind(this)}
        onComplete={this.handleTimeComplete.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(game);
