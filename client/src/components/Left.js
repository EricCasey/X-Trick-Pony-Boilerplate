import React, { Component } from "react";

// React-Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React-Redux Actions
import { LayoutChange } from '../rr_actions/rr_a_layoutChange';

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
        <div id="hoverBox-Left" onClick={this.props.LayoutChange}>></div>
        <div id="leftCont" style={{
              width: lay.left ? '100%' : '0%'
            }}>
          <h2 style={{
              transform: lay.left ? 'rotate(0deg)' : 'rotate(90deg)',
              margin: lay.left ? '0 0 0 0' : '60px 0 0 -143px'
            }}>UI ELEMENTS</h2>
          <div id="leftList" style={{ opacity: lay.left ? 1 : 0 }}>

            <div className="leftO">
              <h5>Switches</h5>
              <div>
                <div>Switch 1</div>
                <div>Switch 2</div>
              </div>
            </div>

            <div className="leftO">
              <h5>Range</h5>
              <div>Range</div>
            </div>

            <div className="leftO">
              <h5>Dropdown</h5>
              <div>dropdown</div>
            </div>


            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Left);
// export default App;
