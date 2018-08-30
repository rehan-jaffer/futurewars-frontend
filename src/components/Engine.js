import React, { component } from 'react';

const Engine = (props) => {

        return (<div className="engine-container">
                  <div className="engine-status">
                  [ {props.engine_status} ]
                  </div>
                  <div className={`engine engine-${props.engine_status.toLowerCase()}`}>
                  </div>
                </div>);
}

export default Engine;