import React, { Component } from 'react';

const indicator_active = (refreshing) => {
  if (refreshing == "ACTIVE")
    return "bar refreshing";
  else if (refreshing == "STALLED")
    return "bar stalled";
  else
    return "bar";
};

  
const Indicator = (props) => {
  const refreshing = (props.refreshing) ? props.refreshing.toLowerCase() : "active";

  return (<div className={`bar-display-container`}>
  <div className={`bar-display-chart`}>
    <div className={indicator_active(refreshing)} style={{"width": props.percent + "%"}}>
    </div>
  </div>
  <div className="bar-label">
    {props.note}
    </div>
  </div>);
};

export default Indicator;