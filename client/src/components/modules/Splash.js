import React, { Component } from "react";

// Redux Imports
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Splash">
      <div id="hero">
      <div id="logoDiv">
        <img src={require('../../img/logo/react.svg')}  id="spin-logo" alt="logo" />
        <img src={require('../../img/Sleipnir.png')} alt="horse" id="hoverBox-Head" className="horse" onClick={this.props.layoutToggle} />
        <img src={require('../../img/logo/redux.svg')}  id="spin-logo" alt="logo" />
      </div>

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
            React, Redux, SASS, D3, 
          </p>
          <img src="" alt=""/>
        </div>
        <div className="contentBox">
          <pre>

            URL: https://github.com/EricCasey/Trick-Pony-Boilerplate
            <br/>
            git clone https://github.com/EricCasey/Trick-Pony-Boilerplate my-project
            <br/>
            cd my-project
            <br/>
            npm i
            <br/>
            cd client
            <br/>
            npm i
            <br/>
            cd ..
            <br/>
            npm start
            <br/>


          </pre>
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
// function mapDispatchToProps(dispatch) {
//   // whenever <function below> is called result should be passed
//   // to all of our reducers
//   return bindActionCreators({
//     LayoutChange: LayoutChange
//   }, dispatch);
// }

// to promote monoSwitch from component to container it needs
// to know about these things

export default connect(mapStateToProps)(Splash);
// export default App;