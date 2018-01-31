import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Keysensor from '../components/Keysensor'
import { SCENE } from '../constants'
import sentence from '../sentence.json'
import _ from 'lodash'
import Menu from '../components/Menu'


class Title extends Component {
  handleKeydown(e) {
    const { actions } = this.props
    if (e.keyCode === 32) {
      actions.startCountdown()
    }

    if (e.keyCode == 27) {
      actions.visibleMenu()
    }
  }

  handleKeyup(e) {
    const { actions } = this.props
    actions.hideMenu()
  }


  componentWillReceiveProps(nextProps) {
    const { history } = this.props
    const { scene } = nextProps

    if (scene === SCENE.countdown) {
      history.push('/game')
    }
  }

  renderMenu() {

    const { actions, game, visible_menu } = this.props
    if(visible_menu === true ) {
      return <Menu actions={actions} current_course={game.course}></Menu>
    }
  }

  render() {
    return (
      <Keysensor onKeyDown={this.handleKeydown.bind(this)} onKeyUp={this.handleKeyup.bind(this)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          タイピングタイトル
        </p>
        <p>スペースで開始</p>
        { this.renderMenu() }
      </Keysensor>
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

export default connect(mapStateToProps, mapDispatchToProps)(Title);
