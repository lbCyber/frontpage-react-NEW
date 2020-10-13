import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  links = [["home", "/"], ["bio", "/bio"], ["skills", "/skills"], ["work", "/work"], ["contact", "/contact"]]

  componentDidMount() {

  }

  render() {
    return (
      <nav className="navTop">
        <ul className="mainNav">
          {
            this.links.map((page, key) => {
              return (
                !(this.props.currentPage === key) ?
                  <React.Fragment>
                    <Link onClick={() => this.props.callBack(key)} to={page[1]} key={key}>
                      <li>{page[0]}</li>
                    </Link>
                    {(key < 3 || (key===3 && this.props.currentPage < 4)) ?
                       // eslint-disable-next-line
                      <span className="navSeparator">//</span> :
                  null
                    }
                  </React.Fragment> :
                  null
              )
            })
          }
        </ul>
      </nav >
    )
  }
}

export default Nav;