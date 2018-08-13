import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sector from './components/Sector';
import { login, current_sector, warp_to, get_player_info } from './actions/login';
import { connect } from 'react-redux';
import CurrentSector from './components/current_sector';
import UserStats from './components/UserStats';
import "./futurewars.css";
import MoveScreen from './components/MoveScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {move_screen_visible: false};
  }

  componentWillMount() {
    let self = this;
    this.props.onLoader("ray", "testpassword");
    this.listener = new window.keypress.Listener();
    this.listener.simple_combo("shift s", function() {
      self.setState({move_screen_visible: !self.state.move_screen_visible});
  });
  
  }

  render() {

    return (
      <div className="console">
      <h1>Console</h1>
      <UserStats user={this.props.user} />
      <CurrentSector sector={this.props.current_sector} warp_function={this.props.warpTo}/>
      <MoveScreen visible={this.state.move_screen_visible} warps={this.props.current_sector} />
      </div>
    );

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
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth_token,
    current_sector: state.current_sector,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
