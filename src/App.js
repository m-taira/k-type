import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import game from './containers/game'
import title from './containers/title'

const App = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <div>
        <Route exact path="/" component={ game }/>
        <Route exact path="/title" component={ title }/>
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
