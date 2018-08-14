import React from 'react';
import ore from '../assets/ore.png';
import organics from '../assets/organics.png';
import equipment from '../assets/equipment.png';
import rank from '../assets/rank.png';
import fighter from '../assets/fighter.png';

export const Players = (props) => {
    if (!props.players) {
        return (<div />);
    }
    return props.players.map((player) => (
        <div class="player-item">
        <div className="player-avatar"></div>
        <div class="player-rank">
          <img src = {rank} className="player-rank-icon" />
          {player.rank}</div>
          <div class="player-name">{player.name}</div>
          <div class="player-ship-name">{player.ship_name}</div>
          <div class="player-ship-type">{player.ship_type}
        <div class="player-fighters">
            <img src = {fighter} className="fighter-icon"/>
            <div class="player-fighter-count">{player.fighters}</div> 
          fighters
          </div>
        </div>
        </div>
    ));
}

export const Warps = (props) => {
    
    if (!props.warps) {
        return (<div />);
    }

return (<div className="warp-links">
    {props.warps.map((warp) => (<div class="round-warp-item" onClick={(_) => props.warp_function(warp.warp)}>{warp.warp}</div>))}
    </div>)
}

export const Port = (props) => {
    
    if (!props.port) {
        return (<div />);
    }

    return (<div className="port-display">
      <div className="port-name">{props.port.name}</div>
      <div className="port-class">Class {props.port.port_class}</div>
      <div className="port-trade-string">
        <img src = {ore} class="port-trades-ore" />
        <img src = {organics} class="port-trades-organics" />
        <img src = {equipment} class="port-trades-equipment" />
      </div>
    </div>)
}

export const Planets = (props) => {

    if (!props.planets) {
        return (<div />);
    }
    
    return (<div />);
}

