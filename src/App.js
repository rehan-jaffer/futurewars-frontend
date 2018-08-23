import React, { Component } from 'react';
import './App.css';
import { login, current_sector, warp_to, get_player_info, express_warp_path, toggle_visibility } from './actions/login';
import { connect } from 'react-redux';
import UserStats from './components/UserStats';
import "./futurewars.css";
import "./fw.css";
import MoveScreen from './components/MoveScreen';
import PortScreen from './components/PortScreen';
import TradeScreen from './components/TradeScreen';
import Console from './components/Console';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {move_screen: false, port_screen: false, trade_screen: false};
  }

  componentWillReceiveProps() {
  }

  componentWillMount() {
    let self = this;

    this.props.onLoader("ray", "testpassword");

    this.listener = new window.keypress.Listener();

    this.listener.simple_combo("m", function() {
      self.setState({move_screen: !self.state.move_screen})
    });
    this.listener.simple_combo("p", function() {
      self.setState({port_screen: !self.state.port_screen})
    });

    this.listener.simple_combo("t", function() {
      self.setState({trade_screen: !self.state.trade_screen})
    });
 
  }

  render() {

    return (
      <div className="console">
        <UserStats user={this.props.user} />
        <Console sector={this.props.current_sector} warp_function={this.props.warpTo} user={this.props.user} />
        <TradeScreen visible={this.state.trade_screen} port={this.props.current_sector}/>
        <MoveScreen visible={this.state.move_screen} warps={this.props.current_sector} express_warp_path={this.props.getWarpPath} key={this.props.current_sector.id} />
        <PortScreen visible={this.state.port_screen} port={this.props.current_sector} />
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
      },
      toggleVisibility: (screen) => {
        dispatch(toggle_visibility(screen));
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
