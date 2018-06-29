import React, { Component } from "react";

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Right" style={{
        width: lay.right ? '300px' : '36px',
        height: lay.foot ? 'calc(100% - 300px)' : 'calc(100% - 36px)'
    }}>
        <div id="hoverBox-Right" onClick={this.props.layoutToggle}>HOVER</div>
        <h2>RIGHT</h2>
      </div>
    );
  }
}

export default Right;
