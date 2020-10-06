import React, { Component } from 'react';

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
  }

  dootAudio = new Audio("./assets/doot.mp3");

  render() {
    return (
      <section classname="bioBox">
        <div className="paulPic">
          <div className="avContainer paulAv" id="paulAv">
            <img src="./assets/meAvT.png" alt="Pixel-art illustration of myself" onMouseDown={() => this.dootAudio.play()} />
          </div>
          <div className="doot"></div>
        </div>
      </section>
    )
  }
}
export default Bio;