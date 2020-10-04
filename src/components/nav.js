import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <ul>
          <li>home</li>
          <li>bio</li>
          <li>skills</li>
          <li>work</li>
          <li>contact</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Nav;