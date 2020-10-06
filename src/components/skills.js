import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
  }

  skillList = [["css", "CSS"],["git","Git/GitHub"],["html5","HTML5"],["javascript","JavaScript"],["jquery","jQuery"],["mysql","MySQL"],["node","node"],["php","PHP"],["python","Python"],["react","React"],["sass","SASS/SCSS"],["wordpress","Wordpress"]]

  render() {
    return (
      <section className="skillsBox">
        {
          this.skillList.map((skill, key) => {
            return (
              <img className="skillIcon" src={`./assets/devicons/${skill[0]}.svg`} alt={skill[1]} key={key} />
            )
          })
        }
      </section>
    )
  }
}

export default Skills;