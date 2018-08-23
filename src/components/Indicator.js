import React, { Component } from 'react';

const indicator_active = (refreshing) => {
  if (!refreshing)
    return "bar";
  else
    return "bar refreshing";
};

  
  export default class Indicator extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div className="bar-display-container">
      <div className="bar-display-chart">
        <div className={indicator_active(this.props.refreshing == "ACTIVE")} style={{"width": this.props.percent + "%"}}>
        </div>
      </div>
      <div className="bar-label">
        {this.props.note}
        </div>
      </div>);
    }
  }