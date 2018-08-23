import React, { Component } from 'react';

export const Warps = (props) => {
    
    if (!props.warps) {
        return (<div />);
    }

     return (<div className="warp-links">
      {props.warps.map((warp) => (<div class="round-warp-item" onClick={(_) => props.warp_function(warp.warp)}>{warp.warp}</div>))}
      </div>)
}

export default Warps;