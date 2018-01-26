import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'



class App extends Component {

  handleAddButton() {
    console.log('handle add button')
    const { actions } = this.props
    actions.addCount(1)
  }

  render() {
    const { count } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={this.handleAddButton.bind(this)} >{count}</button>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
