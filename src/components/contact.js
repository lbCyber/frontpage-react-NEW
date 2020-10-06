import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 4
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
  }

  render() {
    return (
      <div>
        contact
      </div>
    )
  }
}

export default Contact;