import React, { Component } from 'react';
import Indicator from './Indicator';

export class ShipInfo extends Component {
  constructor(props) {
    super(props)
  }
  hold_contents(holds) {
    if (!holds)
      return null;
      
    return Object.keys(holds).map((hold) => {
      return (<li className="holds-item" key={hold + holds[hold]}>
                <div className="holds-commodity-count">
                {holds[hold]}
                </div>
                <div className="holds-commodity-name">
                  {hold}
                </div>
              </li>)
    });
  }

  hold_capacity_used(holds) {
    if (!holds)
      return null;
    return (100-((holds.empty / holds.total) * 100));
  }

  hold_capacity(holds) {
    if (!holds)
      return null;
    return (<div class="holds-capacity">
      <div class="empty-holds">
      Total: {holds.total}
      </div>
      <div class="total-holds">
      Empty: {holds.empty}
      </div>
    </div>)
  }
  render() {
    return (<div className="ship-info-container">
      <h2 className="holds-title">Holds</h2>
    <div className="ship-holds">
    <Indicator note={`Holds in Use (${this.hold_capacity_used(this.props.user.total_holds)}%)`} percent={this.hold_capacity_used(this.props.user.total_holds)}/>
    <ul class="holds-display">
      {this.hold_contents(this.props.user.holds)}
    </ul>
    </div></div>)
  }
}

export default ShipInfo;