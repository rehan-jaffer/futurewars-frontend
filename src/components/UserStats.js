import React, { Component } from 'react';
import turn from "../assets/turn.png";
import experience from "../assets/experience.png";
import AnimateOnChange from 'react-animate-on-change';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

export default class UserStats extends Component {
    constructor(props) {
        super(props);
        this.turns_diff = 0;
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.user.turns != nextProps.user.turns) {
          this.turns_diff = this.props.user.turns - nextProps.user.turns;
      }
    }

    render() {
         if (!this.props.user) {
            return (<div />)
        }
        return (<div class="user-stats">
                  <div className="player-credits">
                    <div className="user-stats-value">
                      <Odometer value={this.props.user.credits} format="(.ddddd)" duration="100" />
                    </div> 
                    CREDITS
                  </div>
                  <div className="player-turns">
                    <div className="user-stats-value">
                      <Odometer value={this.props.user.turns} duration = { 100 } />
                    </div> 
                    TURNS
                </div>
                <div className="player-exp">
                  <div className="user-stats-value">
                    <Odometer value={this.props.user.exp} duration= { 100 } />
                  </div> 
                EXP
                </div>
            </div>)
    }
}