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
    e.preventDefault()
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
    if (visible_menu === true) {
      return <Menu actions={actions} current_course={game.course}></Menu>
    } else {
      return (
        <div className="rule-box">
          <ul className="rule-list">
            <li className="rule-item">ゆっくりでも良いので正しい指で打ちましょう</li>
          </ul>
        </div>
      )
    }


  }

  render() {
    return (
      <Keysensor onKeyDown={this.handleKeydown.bind(this)} onKeyUp={this.handleKeyup.bind(this)}>
        <div className="content">
          <div className="title-main-area">
            <div className="title">
              <p className="title-char title1">た</p>
              <p className="title-char title2">い</p>
              <p className="title-char title3">ぴ</p>
              <p className="title-char title4">ん</p>
              <p className="title-char title5">ぐ</p>
            </div>
            <p className="start-caption">スペースで開始</p>
          </div>
          <div className="title-sub-area">
            { this.renderMenu() }
          </div>
        </div>
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
