import React, { Component } from 'react';
import ship from '../assets/fighter.png'

const viable_positions = [[20, 20], [50, 120], [80, 80], [20, 100]];

export const RadarPlayers = (props) => {
    if (!props.players)
      return null;

    return props.players.map((player, index) => {
      return (<div className="radar-player" style={ {top: viable_positions[index][0], left: viable_positions[index][1]} }>.</div>)
    })
}


const RadarFighter = (props) => {
    return (<img src = {ship} className={props.refreshing == false ? "radar-fighter" : "radar-fighter radar-ship-warping"} />)
};

export default class Radar extends Component {
    constructor(props) {
      super(props);

    }

    render() {
        return (<div className="radar">
          <div className="inner-circle"></div>
            <RadarFighter refreshing={this.props.engine_status == "ACTIVE"}/>
            <RadarPlayers players={this.props.players} />
          </div>)
    }

}