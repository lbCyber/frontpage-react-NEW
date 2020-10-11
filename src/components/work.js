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
      features: Project.featureList,
      sort: 1,
      order: 1
    }
  }

  componentDidMount() {
    this.props.callBack(this.state.currentPage)
    this.sorter()
  }

  sortWork = n => {
    let s = this.state.order
    if (this.state.sort === n) {
      s = (~s) + 1  // If clicked again, reverse sort order (bitwise op)
    } else { s = -1 } // Otherwise, set default sort order on new option selected
    this.setState({ sort: n, order: s })
    const doSort = (a, b) => {
      const sortDate = (x) => {
        return (x["published"][0] * 365) + (x["published"][1] * 30) + x["published"][2]
      }
      const sortAlpha = (x) => {
        return Math.pow(x["title"].toUpperCase().charCodeAt(0), 3) + Math.pow(x["title"].toUpperCase().charCodeAt(1), 2) + x["title"].toUpperCase().charCodeAt(2)
      }
      if (n) {
        return (sortDate(b) - sortDate(a)) * ((~s) + 1) // Date should default latest>descending
      } else {
        return (sortAlpha(b) - sortAlpha(a)) * s
      }
    }
    return this.state.work.sort(doSort)
  }

  sorter = (obj=1) => {
    let sortedObj = this.sortWork(obj)
    this.setState({work:sortedObj})
  }

  render() {
    return (
      <section className="portfolio">
        <div className="sortBox">
          <h5 className="sortTitle">Sort by:</h5>
          <div className="sortOptions">
            <p className="sortText activeSort" onClick={() => this.sorter(1)}>Latest <span
              className={this.state.sort===1?this.state.order===-1?"ascSort":"descSort":null}>
              </span></p>
            <p className="sortText" onClick={() => this.sorter(0)}>Alphabetically <span
              className={this.state.sort===0?this.state.order===1?"ascSort":"descSort":null}>
              </span></p>
          </div>
        </div>
        <div className="portfolioBox">

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
        </div>
      </section>
    )
  }
}

export default Work;