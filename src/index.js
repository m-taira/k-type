import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css'
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import reducer, { initialState } from './reducers'


const store = createStore(reducer, initialState, composeWithDevTools())

ReactDOM.render(
    <App store={store}/>, document.getElementById('root'));
registerServiceWorker();
