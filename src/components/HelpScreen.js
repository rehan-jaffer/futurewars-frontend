import React from 'react';
import { connect } from 'react-redux';

export const NavScreen = (props) => {
  return (<div className="nav-screen">
    <ul className="help-boxes">
      <li>Corporations</li>
      <li>Spaceships</li>
      <li>Hardware</li>
      <li>Trading</li>
      <li>Planets</li>
    </ul>
  </div>)
}

export default connect()(NavScreen);