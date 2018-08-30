import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App.js'
import NavScreen from './NavScreen';
import PortScreen from './PortScreen';
import HelpScreen from './HelpScreen';
import { PrivateRoute } from './PrivateRoute';
import LoginPage from './LoginPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/nav" component={NavScreen} />
        <PrivateRoute path="/port" component={PortScreen} />
        <PrivateRoute path="/help" component={HelpScreen} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root