import React, { Component } from 'react';
//import images
import lookLeft from "../assets/look-left.jpeg"
import lookRight from "../assets/look-right.jpeg"

class ChallengeOne extends Component {
  //declare the state here
  state = {image:lookRight};

  //click left/right button handler goes here
  clickHandlerLeft = () => {
    this.setState({image:lookLeft});
  }
  clickHandlerRight = () => {
    this.setState({image:lookRight});
  }


  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.image}
            alt=""
          />
        </div>
        <button onClick={this.clickHandlerLeft} className="btn">⭠</button>
        <button onClick={this.clickHandlerRight} className="btn">⭢</button>
      </>
    );
  }
}

export default ChallengeOne;