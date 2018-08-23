import './index.css';
import store from './store/index'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'


render(
  <Root store={store} />,
  document.getElementById('root')
)