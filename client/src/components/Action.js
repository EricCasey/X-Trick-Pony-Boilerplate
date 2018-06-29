import React, { Component } from "react";


class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Action" style={{
        left: lay.left ? '300px' : '38px',
        width: lay.left ? 'calc(100% - 338px)' : lay.right ? 'calc(100% - 338px)' : 'calc(100% - 76px)',
        height: lay.foot ? 'calc(100% - 338px)' : 'calc(100% - 74px)',
        top: lay.head ? '300px' : '38px'
      }}>
        <h1>TrickPony.Tools</h1>
        <h1>Homepage & Boilerplate</h1>
      </div>
    );
  }
}

export default Action;
