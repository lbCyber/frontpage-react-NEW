import React, { Component } from 'react';
import NameTag from './components/header.js';
import Nav from './components/nav.js';
import './css/styles.css'

class App extends Component {
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
        <div className="wrapper">
          <NameTag />
          <Nav />
        </div>
      </React.Fragment>
    )
  }
}

export default App;