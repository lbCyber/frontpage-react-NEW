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

  navCB = (e) => {
    this.setState({ currentPage: e })
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div class="preload">
          <img src="./assets/meAvSkeletondoot-horn.png" alt=""/>
          <img src="./assets/meAvSkeletondoot.png" alt=""/>
          <img src="./assets/axologosmile.svg" alt=""/>
        </div>
        <div className="wrapper">
          <Switch>
            <Route path="/bio">
              <Bio />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <NameTag />
            </Route>
          </Switch>
          <Nav currentPage={this.state.currentPage} callBack={this.navCB} />
        </div>
      </Router>
    )
  }
}

export default App;