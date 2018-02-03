import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import { Link } from 'react-router-dom'



class Result extends Component {

  handleAddButton() {
    console.log('handle add button')
    const { actions } = this.props
    actions.addCount(1)
  }

  handleKeyPress(e){
    console.log('call handle key press')
    const { actions } = this.props
    actions.keyPress(e.charCode)
  }

  focusStyle(){
    return {
      outline: 1,
      width: '100%'
    }
  }

  render() {
    const { code } = this.props
    return (
      <div className="App" onKeyPress={this.handleKeyPress.bind(this)} tabIndex="0" style={this.focusStyle()} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/title'>戻る</Link>
      </div>
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
