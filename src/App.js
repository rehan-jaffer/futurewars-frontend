import React, { Component } from 'react';
import './App.css';
import { current_sector, warp_to, get_player_info, express_warp_path } from './actions/api';
import { login } from './actions/login'
import { connect } from 'react-redux';
import UserStats from './components/UserStats';
import "./futurewars.css";
import "./fw.css";

import Console from './components/Console';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
  }

  componentWillMount() {
    this.props.onLoader("ray", "testpassword"); 
  }

  render() {

    if (!this.props.user || !this.props.current_sector)
      return (<div />);

    return (
      <div className="console">
        <UserStats user={this.props.user} />
        <Console sector={this.props.current_sector} warp_function={this.props.warpTo} user={this.props.user} />
    </div>);

  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLoader: (username, password) => {
        dispatch(login(username, password))
      },
      updateSector: () => {
        dispatch(current_sector())
      },
      warpTo: (sector_id) => {
        dispatch(warp_to(sector_id))
      },
      getWarpPath: (sector_id) => {
        dispatch(express_warp_path(sector_id))
      }
    }
}

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth_token,
    current_sector: state.current_sector,
    user: state.user,
    path: state.path,
    screens: state.screens
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
