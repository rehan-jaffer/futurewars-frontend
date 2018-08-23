import React, { Component } from 'react';

export const Port = (props) => {
    
  if (!props.port) {
      return (<div />);
  }

  return (<div className="port-display">
     <div className="port-banner">
      <div className="port-name">
        {props.port.name}
      </div>
    </div>
    <div className="port-trade-string">
        <div className="commodities-trading">
        (Class {props.port.port_class})
          <div className="commodity-line">
            FUEL ORE 
            <div className="trading-type">
              [ BUYING ]
            </div>
          </div>
          <div className="commodity-line">
            ORGANICS 
            <div className="trading-type">
              [ BUYING ]
            </div>
          </div>
          <div className="commodity-line">
            EQUIPMENT 
            <div className="trading-type">
              [ BUYING ]
            </div>
          </div>
        </div>
    </div>
  </div>)
}

  export default Port;