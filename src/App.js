import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameTag from './components/header.js';
import Bio from './components/bio.js';
import Skills from './components/skills.js';
import Work from './components/work.js';
import Contact from './components/contact.js';
import Nav from './components/nav.js';
import './css/styles.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }
  }

  cb = (e) => {
    this.setState({ currentPage: e })
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="wrapper">
            <Switch>
              <Route path="/bio">
                <Bio callBack={this.cb} />
              </Route>
              <Route path="/skills">
                <Skills callBack={this.cb} />
              </Route>
              <Route path="/work">
                <Work callBack={this.cb} />
              </Route>
              <Route path="/contact">
                <Contact callBack={this.cb} />
              </Route>
              <Route path="/">
                <NameTag callBack={this.cb} />
              </Route>
            </Switch>
            <Nav currentPage={this.state.currentPage} callBack={this.cb} />
          </div>
        </Router>
        <div className="preload"> {/* prevent assets from blinking on load */}
        <img src="./assets/meAvT.png" alt="" />
          <img src="./assets/meAvTSkeletondoot.png" alt="" />
          <img src="./assets/meAvTSkeletondoot-horn.png" alt="" />
          <img src="./assets/axologosmile.svg" alt="" />
        </div>
      </React.Fragment>
    )
  }
}

export default App;