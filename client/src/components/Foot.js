import React, { Component } from "react";

// React-Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React-Redux Actions
import { LayoutChange } from '../rr_actions/rr_a_layoutChange';


class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout
    return (
      <div className="Foot" style={{
        height: lay.foot ? '300px' : '36px',
        left: lay.left ? '300px' : '38px',
        width: lay.left ? 'calc(100% - 300px)' : 'calc(100% - 38px)'
      }}>
        <div id="hoverBox-Foot" onClick={this.props.LayoutChange}>^</div>
        <h2>OUTPUTS FILES</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    LayoutChange: LayoutChange
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Foot);
