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
      <div>
        {
          this.state.work.map((project, key) => {
            return (
              <div key={key}>
                <p>Name: {project.title}</p>
                <img src={`./assets/${project.image}`} alt="" />
                <p>Published: {`${this.state.months[project.published[1]]} ${project.published[2]}, ${project.published[0]}`}</p>
                <div>
                  <ReactMarkdown source={project.text} escapeHtml={false} />
                </div>
                <div>
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
      </div>
    )
  }
}

export default Work;