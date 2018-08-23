import React, { Component } from 'react';
import NavIcon from "../assets/navigation.png";

export default class MoveScreen extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.state = {};
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.express_warp_path(this.state.value);
  }

  render() {
    
          if (this.props.visible == false || !this.props.warps.warps) {
          return (<div />)
      }

      return (<div className="screen">
              <h3 class="nav-comp-title"><img src={NavIcon} className="nav-icon" />NAVCOMP</h3>
              <ul class="engine-stats">
               <li>Engine Status: Idling</li>
               <li>Core Status: Stable</li>
              </ul>
                <div class="move-screen-warps">
                {this.props.warps.warps.map((warp) => {
                  return (<div class="move-screen-warp-item">
                    {warp.warp}
                  </div>)
                })}
                </div>
                <div className="move-screen-warp-to">
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="warp-to" className="warp-to-input" autoFocus={true} onChange={this.handleChange} />
                    <button type="submit" />
                  </form>
                </div>
                <div className="screen-footer">
                Press Q to Exit
                </div>
             </div>)
  }

}