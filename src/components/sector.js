import React from 'react';

export const Players = (props) => {
    if (!props.players) {
        return (<div />);
    }
    return props.players.map((player) => (
        <div class="player-item">
        <div class="player-rank">{player.rank}</div>
          <div class="player-name">{player.name}</div>
          <div class="player-ship-type">{player.ship_type}</div>
          <div class="player-fighters">
            <div class="player-fighter-count">{player.fighters}</div> 
          fighters
          </div>
        </div>
    ));
}

export const Warps = (props) => {
    
    if (!props.warps) {
        return (<div />);
    }

return (<div className="warp-links">
    {props.warps.map((warp) => (<div class="warp-item" onClick={(_) => props.warp_function(warp)}>{warp}</div>))}
    </div>)
}

export const Port = (props) => {
    
    if (!props.port) {
        return (<div />);
    }

    return (<div className="port-display">
      <div className="port-class">Class {props.port.port_class}</div>
      <div className="port-name">{props.port.name}</div>
      <div className="port-trade-string">({props.port.trades})</div>
    </div>)
}

export const Planets = (props) => {

    if (!props.planets) {
        return (<div />);
    }
    
    return (<div />);
}

