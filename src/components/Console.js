import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Port } from './port';
import { Warps, WarpGrid } from './warps';
import { Planets, PlanetGrid } from './planet';
import { ShipInfo } from './ShipInfo';
import { Menu } from './Menu';
import ConsoleDisplay from './ConsoleDisplay';
import { Players, Player } from './players';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Console extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {

  }

  players() {
      if (!this.props.sector.players)
        return null;

      return (<div className="players-list">
         <h2 className="players-title">Players</h2>
        {this.props.sector.players.map((player) => {
          return (<Player key={player.username} player={player} />);
        })}
        </div>);
  }

  render() {
      
      if (!this.props.sector || !this.props.user || !this.props.warps) {
          return (<div />);
      }

      return (<div className="console-container">
            <div className="left-section">
              <ConsoleDisplay user={this.props.user} />
             <div className="location-display">
               <div className="sector-id">{this.props.sector.id}</div>
               <div className="sector-location">Typhus Expanse</div>
             </div>
             <div className="console-section">
                 <ReactCSSTransitionGroup
                 transitionName="example"
                 transitionEnterTimeout={1500}
                 transitionLeaveTimeout={1300}
                 transitionAppear={true}
                 transitionAppearTimeout={500}>
                 {this.players()}
               </ReactCSSTransitionGroup>
               <PlanetGrid planets={this.props.sector.planets} />
               </div>
              </div>
             <div className="right-section">
               <h2 className="warps-title">Warps</h2>
                 <WarpGrid sector={this.props.sector} warps={this.props.warps} warp_function={this.props.warp_function} />
               <h2 className="port-title">Port</h2>
               Press P for Port options
               <Port port={this.props.sector.port} />
               <ShipInfo user={this.props.user} />
               <Menu />
               </div>
             </div>);
  }
}

const mapStateToProps = (state) => {
  return {
      warps: state.current_sector.warps
  }
}

export default connect(mapStateToProps)(Console);