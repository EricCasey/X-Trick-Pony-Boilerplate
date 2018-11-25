import React, { Component } from "react";

import Splash from './modules/Splash.js';

// Redux Imports
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

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
        <Splash layout={this.props.layout}/>
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
// function mapDispatchToProps(dispatch) {
//   // whenever <function below> is called result should be passed
//   // to all of our reducers
//   return bindActionCreators({
//     LayoutChange: LayoutChange
//   }, dispatch);
// }

// to promote monoSwitch from component to container it needs
// to know about these things

export default connect(mapStateToProps)(Action);
// export default Action;