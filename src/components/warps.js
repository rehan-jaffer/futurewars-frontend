import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { shape_list } from '../points';

export const WarpGrid = (props) => {
    let shape_index = props.warps.length || 0;
    let item_positions = shape_list(100, 50, shape_index);
    return (<div className="warp-grid">
              <ReactCSSTransitionGroup
               transitionName="example"
               transitionEnterTimeout={1500}
               transitionLeaveTimeout={1300}
               transitionAppear={true}
               transitionAppearTimeout={500}>
            {props.warps.map((warp, index) => {
              return (<div className="warp-item" onClick={(_) => props.warp_function(warp.warp)}>
              <div key={Math.random()} className={"warp-point" + ((warp.explored == true) ? " explored" : "")} style={{top: item_positions[index][0], left: item_positions[index][1]}}>{warp.warp}</div>
              </div>)
            })}
            </ReactCSSTransitionGroup>
            <div className="warp-origin">
              {props.sector.id}
            </div>
      </div>)
}

export class WarpGrid2 extends Component {
    constructor(props) {
      super(props);
    }

    item_positions() {
        let shape_index = this.props.warps.length || 0;
        return shape_list(100, 50, shape_index)
    }

    render() {

        if (!this.props.sector || !this.props.warps) {
        return (<div>no content</div>);
      }

      console.log(this.props.warps);

      return (<div className="warp-grid">
              <ReactCSSTransitionGroup
               transitionName="example"
               transitionEnterTimeout={1500}
               transitionLeaveTimeout={1300}
               transitionAppear={true}
               transitionAppearTimeout={500}>
            {this.props.warps.map((warp, index) => {
              return (<div className="warp-item" onClick={(_) => this.props.warp_function(warp.warp)}>
              <div key={Math.random()} className={"warp-point" + ((warp.explored == true) ? " explored" : "")} style={{top: this.item_positions()[index][0], left: this.item_positions()[index][1]}}>{warp.warp}</div>
              </div>)
            })}
            </ReactCSSTransitionGroup>
            <div className="warp-origin">
              {this.props.sector.id}
            </div>
          </div>
      );
    }
}

export const Warps = (props) => {
    
    if (!props.warps) {
        return (<div />);
    }

     return (<div className="warp-links">
      {props.warps.map((warp) => (<div class="round-warp-item" onClick={(_) => props.warp_function(warp.warp)}>{warp.warp}</div>))}
      </div>)
}

const mapStateToProps = (state) => {
    return {
      sector_id: state.current_sector.id,
      warps: state.current_sector.warps
    }
};

export default connect(null)(Warps, WarpGrid);