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
      <React.Fragment>
        <ul>
          {
            this.links.map((page, key) => {
              return (
                !(this.props.currentPage===key) ?
                  <Link onClick={()=>this.props.callBack(key)} to={page[1]} key={key}>
                    <li>{page[0]}</li>
                  </Link> :
                  null
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default Nav;