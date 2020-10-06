import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Project from '../json/projects.json';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 3,
      work: Project.projects,
      months: Project.months,
      features: Project.featureList
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
  }

  render() {
    return (
      <section className="portfolioBox">
        {
          this.state.work.map((project, key) => {
            return (
              <div className="projectContainer" key={key}>
                <h3 className="projectName">Name: {project.title}</h3>
                <img className="projectBanner" src={`./assets/${project.image}`} alt="" />
                <h4 className="projectDate">Published: {`${this.state.months[project.published[1]]} ${project.published[2]}, ${project.published[0]}`}</h4>
                <div className="projectText">
                  <ReactMarkdown source={project.text} escapeHtml={false} />
                </div>
                <div className="projectFeaturesContainer">
                  <ul>
                    {
                      project.features.map((feature, key) => {
                        return (
                          <li key={key}>
                            {this.state.features[feature]}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </section>
    )
  }
}

export default Work;