import React, { Component } from "react";

// React-Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React-Redux Actions
import { LayoutChange } from '../rr_actions/rr_a_layoutChange';


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
        <div id="hoverBox-Right" onClick={this.props.LayoutChange}>{`<`}</div>
        <h2 style={{
              transform: lay.right ? 'rotate(0deg)' : 'rotate(270deg)',
              margin: lay.right ? '0 0 0 0' : '110px 0 0 -10px',
              width: lay.right ? '300px' : '1000px'
            }}>RESULTS</h2>
      </div>
    );
  }
}

// this is the 'data' that gets bound to props
function mapStateToProps(state) {
  // whatever gets returned will show up as props inside of dispatch fun
  return {
    theme: state.theme,
    layout: state.layout
  };
}

// these are the 'actions' that get bound to props
function mapDispatchToProps(dispatch) {
  // whenever <function below> is called result should be passed
  // to all of our reducers
  return bindActionCreators({
    LayoutChange: LayoutChange
  }, dispatch);
}

// to promote monoSwitch from component to container it needs
// to know about these things

export default connect(mapStateToProps, mapDispatchToProps)(Right);
// export default App;