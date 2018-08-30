import React, { Component } from 'react';
import ship from '../assets/spaceship.png'

const viable_positions = [];


export const RadarPlayers = (props) => {
    if (!props.players)
      return null;

      let shape_index = props.players.length || 0;
      let radius = 50;
      let width = (radius * 2);
      let shape_list = []

      for (let i=0; i<shape_index; i++) {
        let angle = (i / (shape_index/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                          // For a semicircle, we would use (i / numNodes) * Math.PI.
        let x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
        let y = (radius * Math.sin(angle)) + (width/2);
        shape_list.push([x, y])
      }

    return (<div className="radar-players">
      {props.players.map((player, index) => {
      return (<div className="radar-player" style={ {top: shape_list[index][0], left: shape_list[index][1]} }>.</div>)
    })}
    </div>)
}


export const RadarFighter = (props) => {
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