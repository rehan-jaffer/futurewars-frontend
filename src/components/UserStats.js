import React, { Component } from 'react';

export default class UserStats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
         if (!this.props.user) {
            return (<div />)
        }
        return (<div class="user-stats">
          <div className="player-credits">{this.props.user.credits}</div>
          <div className="player-turns">{this.props.user.turns}</div>
          <div className="player-exp">{this.props.user.exp}</div>
        </div>)
    }
}