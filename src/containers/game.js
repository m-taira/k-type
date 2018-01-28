import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import Countdown from 'react-countdown-now'

import Mondai from '../components/Mondai'


class game extends Component {

  handleAddButton() {
    console.log('handle add button')
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e) {
    console.log('call handle key press')
    const { actions } = this.props
    actions.keyPress(e.charCode)
  }

  renderer({ hours, minutes, seconds, completed }) {
    const { count, code } = this.props
    if (completed || count > 0) {
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
        controled={true}
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
