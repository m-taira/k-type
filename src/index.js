import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import reducer, { initialState } from './reducers'


const store = createStore(reducer, initialState)

ReactDOM.render(
    <App store={store}/>, document.getElementById('root'));
registerServiceWorker();
