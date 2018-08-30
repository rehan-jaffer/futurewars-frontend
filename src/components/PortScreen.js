import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../actions/login.js";
import ShipInfo from './ShipInfo';
import { query_port, current_sector } from '../actions/api';
import AuthService from './AuthService.js';

class PortScreen extends Component {
  constructor(props) {
    super(props);
    let auth = new AuthService;
    this.props.auth();
    this.props.onLoader();
  }

  render() {
    if (!this.props.port || !this.props.user)
    return (<div />)

    return (<div className="port-display">
    <div className="port-details">
      <h1>Welcome to {this.props.port.name}</h1>
    </div>
    <ShipInfo user={this.props.user} />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    sector: state.current_sector,
    port: state.current_sector.port,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoader: () => {
      dispatch(current_sector());
      dispatch(query_port(1));
    },
    auth: () => {
      dispatch(login("ray", "testpassword"));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PortScreen);