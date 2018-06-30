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
      <div id="hero">
      <img src={require('../img/Sleipnir.png')} alt="horse" id="hoverBox-Head" onClick={this.props.layoutToggle} />
        <h1>
          Trick Pony Tools
        </h1>
        <h2>
          Homepage & Open Express-React-Redux Web App Boilerplate
        </h2>

        <h4>
          A Node, Express, React, Redux, D3, Plotly, R, Boilerplate Project
        </h4>
      </div>

        <div className="infoDiv"> 
          <p>

          </p>
          <img src="" alt=""/>
        </div>
        <div className="contentBox">
          content content content
        </div>
      </div>
    );
  }
}

export default Action;
