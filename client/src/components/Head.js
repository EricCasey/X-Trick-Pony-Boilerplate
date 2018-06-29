import React, { Component } from "react";

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Head" style={{
        height: this.props.layout.head ? '300px' : '36px',
        width: lay.right ? 'calc(100% - 300px)' : 'calc(100% - 38px)',
    }}>
        <img src={require('../img/Sleipnir.png')} alt="horse" id="hoverBox-Head" onClick={this.props.layoutToggle} />
        <h5> # TRICK PONY TOOLS </h5>
      </div>
    );
  }
}

export default Head;
