import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Players, Planets, Port, Warps } from './sector';

class CurrentSector extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
  }

  render() {
      
      if (!this.props.sector) {
          return (<div />);
      }

      return (<div className="sector">
             <div className="sector-id">
               <h2>Current Sector</h2>
               <li>ID: {this.props.sector.id}</li>
               <li>Location: Typhus Expanse</li>
             </div>
             <h2 className="players-title">Players</h2>
             <Players players={this.props.sector.players} />
             <h2>Planets</h2>
             <Planets />
             <h2 className="port-title">Port</h2>
             Press P for Port options
             <Port port={this.props.sector.port} />
             <h2 className="warps-title">Warps</h2>
             <Warps warps={this.props.sector.warps} warp_function={this.props.warp_function} />
             </div>);
  }
}


export default CurrentSector;