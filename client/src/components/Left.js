import React, { Component } from "react";


class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Left" style={{
          width: lay.left ? '300px' : '36px',
          height: 'calc(100% - 36px)',
          top: lay.head ? '300px' : '38px'
      }}>
        <div id="hoverBox-Left" onClick={this.props.layoutToggle}>HOVER</div>
        <h2>LEFT</h2>
      </div>
    );
  }
}

export default Left;
