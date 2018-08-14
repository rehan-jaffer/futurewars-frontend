import React, { Component } from 'react';
import turn from "../assets/turn.png";
import experience from "../assets/experience.png";
import AnimateOnChange from 'react-animate-on-change';

export default class UserStats extends Component {
    constructor(props) {
        super(props);
        this.turns_diff = 0;
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.user.turns != nextProps.user.turns) {
          this.turns_diff = this.props.user.turns - nextProps.user.turns;
          console.log(this.turns_diff);
      }
    }

    render() {
         if (!this.props.user) {
            return (<div />)
        }
        return (<div class="user-stats">
          <div className="player-credits">
          <div className="user-stats-value">{this.props.user.credits}</div> CREDITS
          </div>
          <div className="player-turns">
            <div class="stats-icon">
              <img src={turn} className="stats-icon-img" />
            </div>
            <div className="user-stats-value">
            <AnimateOnChange
              baseClassName="turns"
              animationClassName="turns--bounce"
              animate={this.turns_diff > 0}>
                {this.props.user.turns}
              </AnimateOnChange>
              </div> 
              TURNS
          </div>
          <div className="player-exp">
          <div class="stats-icon">
              <img src={experience} className="stats-icon-img" />
            </div>
            <div className="user-stats-value">{this.props.user.exp}</div> EXP</div>
        </div>)
    }
}