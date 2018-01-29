import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './containers/Game'
import Title from './containers/Title'
import Result from './containers/Result'

const App = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <div className="container">
        <Route exact path="/game" component={ Game }/>
        <Route exact path="/title" component={ Title }/>
        <Route exact path="/result" component={ Result }/>
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
