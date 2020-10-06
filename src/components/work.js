import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 3
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
  }

  render() {
    return (
      <div>
        work
      </div>
    )
  }
}

export default Work;