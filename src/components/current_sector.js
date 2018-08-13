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
             <div className="sector-id">{this.props.sector.id}</div>
             <Players players={this.props.sector.players} />
             <Planets />
             <Port port={this.props.sector.port} />
             <Warps warps={this.props.sector.warps} warp_function={this.props.warp_function} />
             </div>);
  }
}


export default CurrentSector;