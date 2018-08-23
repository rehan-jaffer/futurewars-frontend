import React, { Component } from 'react';

const CommodityRow = (props) => {
  return (<tr class="fuel-ore-stats">
            <td class = "commodity-name">{props.commodity.name}</td>
            <td class =  "commodity-trade-type">{props.commodity.trade_type}</td>
            <td>{props.commodity.trading}</td>
            <td>{props.commodity.trading_percent}</td>
            <td>0</td>
         </tr>)
}

export default class TradeScreen extends Component {
    constructor(props) {
        super(props);
        this.commodities = {};
        this.commodities.fuel_ore = {name: "Fuel Ore", trade_type: "Selling", trading: 2900, trading_percent: "95%"};
        this.commodities.organics = {name: "Organics", trade_type: "Selling", trading: 1900, trading_percent: "95%"};
        this.commodities.equipment = {name: "Equipment", trade_type: "Buying", trading: 1500, trading_percent: "95%"};
    }
    render() {
      if (this.props.visible == false) {
        return (<div />);
      }

      return (
        <div class={"trade-screen"}>
          <table class="trade-screen-stats">
              <tr class="trade-screen-stats-header">
                <th class = "item-column">Item</th>
                <th class = "status-column">Status</th>
                <th class = "trading-column">Trading</th>                                
                <th class = "percent-max-column">% Max</th>
                <th class = "on-board-column">In Holds</th>
              </tr>
              <CommodityRow commodity={this.commodities.fuel_ore} />
              <CommodityRow commodity={this.commodities.organics} />
              <CommodityRow commodity={this.commodities.equipment} />
          </table>
          <div class="comms-label">
            TRADECOMM V0.23 (10398882XN) PROPERTY OF CERULEAN EMPIRE
          </div>
        </div>
      );
  }    
}

