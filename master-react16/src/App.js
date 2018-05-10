import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
  state = {
    friends: ["jaehyung", "mirim", "nicolas", "daesung"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      
    })
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend}`);
  }
}

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
        <ErrorMaker />
      </Fragment>
    );
  }
}

export default App;
