import ore from '../assets/ore.png';
import equipment from '../assets/equipment.png';
import organics from '../assets/organics.png';
import React, { Component } from 'react';

const displayIconClass = (buying_or_selling, letter) => {
  if (buying_or_selling == letter) {
      return "icon-visible";
  } else {
      return "icon-invisible";
  }
};

const PortTradesChart = (props) => {
    console.log(props);
  return (<div className="port-trades-chart">
                 <div class="port-buys-label">BUYS</div>
                <div className="port-buys">
                 <div className="port-buys-ore port-buys-icon">
                   <img src={ore} className={"commodity-icon " + displayIconClass("B", props.port_trades.ore)} />
                  </div>
                  <div className="port-buys-organics port-buys-icon">
                    <img src={organics} className={"commodity-icon " + displayIconClass("B", props.port_trades.organics) } />
                  </div>
                  <div className="port-buys-equipment port-buys-icon">
                    <img src={equipment} className={"commodity-icon " + displayIconClass("B", props.port_trades.equipment) } />
                  </div>
                </div>
                <div className="port-sells-label">SELLS</div>
                <div className="port-sells">                
                  <div className="port-buys-ore port-buys-icon">
                   <img src={ore} className={"commodity-icon " + displayIconClass("S", props.port_trades.ore)} />
                  </div>
                  <div className="port-buys-organics port-buys-icon">
                    <img src={organics} className={"commodity-icon " + displayIconClass("S", props.port_trades.organics) } />
                  </div>
                  <div className="port-buys-equipment port-buys-icon">
                    <img src={equipment} className={"commodity-icon " + displayIconClass("S", props.port_trades.equipment) } />
                  </div>
                </div>
            </div>)
}

export default PortTradesChart;