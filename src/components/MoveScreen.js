import React, { Component } from 'react';

export default class MoveScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (this.props.visible == false) {
          return (<div />)
      }

      return (<div className="move-screen">
              M O V E S C R E E N
             </div>)
  }

}