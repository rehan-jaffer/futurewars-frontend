import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/login'

export class Menu extends Component {

     constructor(props) {
       super(props);
//       this.logout = () => {}
     }

     componentDidMount() {
       
     }

     logout() {
      this.props.LogOut();
     }

    render() {
      return (<ul className="menu">
        <NavLink to="/port">Port</NavLink>
        <NavLink to="/nav">Nav</NavLink>
        <NavLink to="/help">Help</NavLink>
        <a onClick={logout}>Log Out</a>
      </ul>)

    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    LogOut: () => {
      dispatch(logout())
    },
    OnKlik: () => {
      alert('hi');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);