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
    const { actions } = this.props
    this.loadSentences()
    actions.startCountdown()
  }

  loadSentences(){
    const { actions } = this.props
    actions.loadSentences(sentence)
  }

  componentWillReceiveProps(nextProps) {
    const { game, history, scene, actions, sentences, curent_sentence } = nextProps
    if(game.unentered === '' && scene === SCENE.playing) {
      if(game.current_sentence === game.sentences.length - 1) {
        history.push('/result')
      } else {
        actions.nextSentence()
      }
    }
  }

  handleAddButton() {
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e) {
    const { actions, game } = this.props
    const currentChar = game.unentered.charAt(0)
    const currentCode = currentChar.toLowerCase().charCodeAt(0)

    if(e.charCode === currentCode) {
      actions.correctType(currentChar)
    } else {
      actions.miss()
    }
  }

  handleTimeComplete() {
    const { actions } = this.props
    actions.startGame()
  }

  renderer({ hours, minutes, seconds, completed }) {
    const { count, code, scene, game } = this.props
    if (completed || scene === SCENE.playing) {
      return (<Mondai
          entered={game.entered}
          unentered={game.unentered}
          kanji={game.sentences[game.current_sentence].kanji}
          count={count}
          code={code}
          onClick={this.handleAddButton.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      )
    } else {
      return <p>{seconds}</p>
    }
  }

  render() {
    return (
      <Countdown
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
