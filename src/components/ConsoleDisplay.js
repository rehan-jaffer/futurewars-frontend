import React, { Component } from 'react';
import fighter from '../assets/fighter.png';
import mine from '../assets/mine.png';
import probe from '../assets/probe.png';
import hazard from '../assets/hazard.png';
import ship from '../assets/spaceship.png';
import { connect } from 'react-redux';
import Indicator from './Indicator';
import Engine from './Engine';

import Radar, { RadarPlayers, RadarFighter } from './Radar';

const HardwareSegment = (props) => {
  return (<div className="hardware-display-segment">
    <img src = {props.icon} className="hardware-display-icon" />
    <div className="hardware-display-count">{props.count}</div>
  </div>)
}


export class ConsoleDisplay extends Component {
  
  constructor(props) {
    super(props);
  }

  shield_percent() {

    if (!this.props.shields)
      return 0;

      return (this.props.shields.current / this.props.shields.max) * 100.0;
  }

shield_stats() {

  if (!this.props.shields)
    return "";

  return `Shields (${this.props.shields.current}/${this.props.shields.max})`;

}

  render() {    

    return (<div className="console-info">
    <div className="bar-displays">
      <Indicator note={this.shield_stats()} percent={this.shield_percent()} />
      <Indicator note={"Engine Coils"} percent="80" refreshing={this.props.engine_status} stalled={this.props.engine_status} />

      <div class="navigation-displays">
        <HardwareSegment icon={hazard} count={this.props.nav_hazard + "%"} />   
      </div>
    </div>
    <div className="circle-displays">
      <div className="radar">
        <div className="inner-circle"></div>
        <RadarFighter refreshing={this.props.engine_status == "ACTIVE"}/>
        <RadarPlayers players={this.props.players} />
      </div>
      <Engine engine_status={this.props.engine_status} />
    </div>
    <div className="text-display">
      <div className="console-line">
      {this.props.user.ship_serial}
      </div>
      <div className="console-line">
        [ Ship Built {this.props.user.ship_date_built} ]
      </div>
      <div className="console-line">
        [ Manufactured by the Ingloria Consortium ]
        </div>
        <div className="console-line">
        [ Human Translation Interface ] [ ACTIVE ]
        </div>
        <div className="hardware-displays">
          <HardwareSegment icon={fighter} count={this.props.fighters} />
          <HardwareSegment icon={probe} count={"0"} />
          <HardwareSegment icon={mine} count={"0"} />                                
        </div>
      </div>
      </div>)
  }   
}

const mapStateToProps = (state) => {
  return {
    engine_status: state.engine.status,
    fighters: state.user.fighters,
    nav_hazard: state.current_sector.nav_hazard,
    shields: state.user.ship_shields,
    players: state.current_sector.players
  }
}

export default connect(mapStateToProps, null)(ConsoleDisplay);