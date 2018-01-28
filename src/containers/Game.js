import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import Countdown from 'react-countdown-now'

import Mondai from '../components/Mondai'

import { SCENE } from '../constants'


class game extends Component {

  componentWillMount() {
    const { actions } = this.props
    actions.startCountdown()
  }

  componentWillReceiveProps(nextProps) {
    const { unentered, history, scene } = nextProps

    console.log('check typing')
    console.log(unentered)
    console.log(scene)
    console.log(SCENE.playing)

    if(unentered === '' && scene === SCENE.playing) {
      history.push('/result')
    }
  }

  handleAddButton() {
    console.log('handle add button')
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e) {
    console.log('call handle key press')
    const { actions, unentered } = this.props
    const currentChar = unentered.charAt(0)
    const currentCode = currentChar.toLowerCase().charCodeAt(0)

    if(e.charCode === currentCode) {
      actions.correctType(currentChar)
    }
  }

  handleTimeComplete() {
    console.log('complete timer')
    const { actions } = this.props
    actions.timerComplete()
  }

  renderer({ hours, minutes, seconds, completed }) {
    const { count, code, scene, entered, unentered } = this.props
    if (completed || scene === SCENE.playing) {
      return (<Mondai
          entered={entered}
          unentered={unentered}
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
