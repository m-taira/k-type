import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import { Link } from 'react-router-dom'

import Keysensor from '../components/Keysensor'



class Result extends Component {


  handleKeydown(e){
    console.log('call handle key down')
    const { history } = this.props
    if(e.keyCode === 32) {
      history.push('/title')
    }
  }

  missStyle() {
    return {
      fontSize: '3.5rem'
    }
  }

  render() {
    const { miss } = this.props
    return (
      <Keysensor onKeyDown={this.handleKeydown.bind(this)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p style={this.missStyle()}>{miss}回ミスしたよ</p>
        <p>スペースでタイトルに戻る</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Result);
