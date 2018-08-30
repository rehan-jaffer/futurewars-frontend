import React, { Component } from 'react';
import shape_list from '../points';

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

export const PlanetGrid = (props) => {
  let points = shape_list(100, 50, props.planets.length);
  return (<div className="planet-grid">
       [ PLANET SCANNER ]
       { props.planets.map((planet, index) => {
      return (<div className="planet-grid-point" key={planet.name} style={{top: points[index][0], left: points[index][1]}}>
        <div className="planet-grid-point-label">{planet.name} <span className="planet-grid-point-classification">{planet.classification}</span></div>
      </div>)
    }) } 
  </div>)
}


export default {Planets, PlanetGrid};