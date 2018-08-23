import React, { Component } from 'react';
import { fighter } from '../assets/fighter.png';
import { rank } from '../assets/rank.png';

export const Player = (props) => {
    return (<div class="player-item" key={props.player.username}>
    <div className="player-avatar">
      <div className="player-details">
      </div>
      </div>
      <a className="player-rank">
          <img src = {rank} className="player-rank-icon" />
          {props.player.rank}
        </a>
        <a className="player-name">{props.player.name}</a>
      <div class="player-ship-name">{props.player.ship_name}</div>
      <div class="player-ship-type">{props.player.ship_type}</div>
    <div class="player-fighters">
        <img src = {fighter} className="fighter-icon"/>
        <div class="player-fighter-count">{props.player.fighters}</div> 
      fighters
      </div>
    </div>);
}

export class Players extends Component {
    render() {
      if (!this.props.players) {
          return (<div />);
      }
    
      return this.props.players.map((player) => (
        <Player player={player} key={player} />
      ));
  }
}

export default {Players, Player};