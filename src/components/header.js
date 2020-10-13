import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NameTag extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <section className="headerMain">
        <div className="centerHeaderItems">
          {/* <div className="backgroundStyle"></div> */}
          <div className="myPicContainer">
            <img src="./assets/mePic-squareBW.png" alt="It's me, Paul. Hello!" />
          </div>
          <div className="headerText">
            <h2>Hi there<span className="blue">!</span></h2>
            <h2>My name is</h2>
            <h1>Paul R<span className="white">.</span></h1>
          </div>
        </div>
        <h3>And I'm a Toronto-based web developer</h3>
        <ul className="mainNav">
          <Link onClick={() => this.props.callBack(1)} to={"/bio"}>
            <li>bio</li>
          </Link>
          {/*eslint-disable-next-line*/}
          <span className="navSeparator">//</span>
          <Link onClick={() => this.props.callBack(2)} to={"/skills"}>
            <li>skills</li>
          </Link>
          {/*eslint-disable-next-line*/}
          <span className="navSeparator">//</span>
          <Link onClick={() => this.props.callBack(3)} to={"/work"}>
            <li>work</li>
          </Link>
          {/*eslint-disable-next-line*/}
          <span className="navSeparator">//</span>
          <Link onClick={() => this.props.callBack(4)} to={"/contact"}>
            <li>contact</li>
          </Link>
        </ul>
      </section>
    )
  }
}

export default NameTag;