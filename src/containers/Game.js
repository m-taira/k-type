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

  handleAddButton() {
    console.log('handle add button')
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e) {
    console.log('call handle key press')
    const { actions, history } = this.props
    if(e.charCode === 101) {
      history.push('/result')
    } else {
      actions.keyPress(e.charCode)
    }
  }

  handleTimeComplete() {
    console.log('complete timer')
    const { actions } = this.props
    actions.timeComplete()
  }

  renderer({ hours, minutes, seconds, completed }) {
    const { count, code, scene } = this.props
    if (completed || scene === SCENE.playing) {
      return (<Mondai
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
        date={Date.now() + 3000}
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
