import React, { Component } from 'react';
import PortTradesChart from './PortTradesChart'
import TradeScreen from './TradeScreen';
import trade from '../assets/trade.png';
import attack from '../assets/attack.png';
import rob from '../assets/rob.png';
import { connect } from 'react-redux';

class PortScreen extends Component {
  constructor(props) {
    super(props);
  }

  visibility_class(visible) {
    if (visible) {
      return "visible";
    }
  }


  render() {
      
      if (this.props.visible == false || !this.props.port.port) {
          return (<div />)
      }

      return (<div className={"screen " + this.visibility_class(this.props.visible)}>
              <div className = "port-name-title">
                {this.props.port.port.name}
              </div>
              <PortTradesChart port_trades={this.props.port.port.trades}/>
                <div className="port-actions">
                  <div className="port-trade-action">
                    <img src={trade} className = "port-trade-icon" />
                    TRADE
                  </div>
                  <div className="port-attack-action">
                    <img src={attack} className = "port-attack-icon" />
                    ATTACK
                  </div>
                  <div className="port-rob-action">
                    <img src={rob} className = "port-rob-icon" />
                    ROB
                  </div>
                </div>
                <div class="screen-footer">
                Press Q to Exit
                </div>
              </div>)
  }

}

const mapStateToProps = (state) => {
  return {
    screens: state.screens
  }
}

export default connect(mapStateToProps, null)(PortScreen);