import React, { Component } from 'react';

export const Planets = (props) => {
    if (!props.planets)
      return (<div />);

    return (<div class="planets-display">
     { props.planets.map((planet) => {
        return (<div className="planet-item" key={planet.name}>
                  <div className="planet-name">{planet.name}</div>
                  <div className="planet-image">

                  </div>
                  <div className="planet-classification">
                    ({planet.classification}/{planet.planet_type})
                  </div>
                </div>)
      }) } 
    </div>)
}
