import React from 'react';
import ore from '../assets/ore.png';
import organics from '../assets/organics.png';
import equipment from '../assets/equipment.png';
import rank from '../assets/rank.png';
import fighter from '../assets/fighter.png';
import Typist from 'react-typist';

export const Players = (props) => {
    if (!props.players) {
        return (<div />);
    }
    return props.players.map((player) => (
        <div class="player-item" key={player.username}>
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
       <div className="port-banner">
        <div className="port-name">
          {props.port.name}
        </div>
      </div>
      <div className="port-trade-string">
          <div className="commodities-trading">
          (Class {props.port.port_class})
            <div className="commodity-line">
              FUEL ORE 
              <div className="trading-type">
                [ BUYING ]
              </div>
            </div>
            <div className="commodity-line">
              ORGANICS 
              <div className="trading-type">
                [ BUYING ]
              </div>
            </div>
            <div className="commodity-line">
              EQUIPMENT 
              <div className="trading-type">
                [ BUYING ]
              </div>
            </div>
          </div>
      </div>
    </div>)
}

export const Planets = (props) => {

    if (!props.planets) {
        return (<div />);
    }
    
    return (<div />);
}

