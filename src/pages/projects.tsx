import React from 'react'
import _ from 'lodash'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DefaultLayout from '../components/DefaultLayout'
import ProjectsModel from '../models/ProjectsModel'
import ProjectItem from '../components/ProjectItem'
import ProjectItem2 from '../components/ProjectItem2'

interface ProjectsTemplateProps {
  data: any
}

const Projects: React.SFC<ProjectsTemplateProps> = ({ data }) => {
  const projects = ProjectsModel.fromGraph(data)
  const { display } = projects

  const iconItemsRef = React.createRef()

  setTimeout(() => {
    if (iconItemsRef && iconItemsRef.current) {
      const { current } = iconItemsRef
      const { childNodes } = current
      let max = 0
      childNodes.forEach($el => {
        const height = $el.childNodes[0].offsetHeight
        if (max < height) {
          max = height
        }
      })
      childNodes.forEach($el => {
        $el.childNodes[0].style.height = `${max}px`
      })
    }
  }, 500)

  const onCategorySelected = e => {
    const { display } = projects
    if (e.target.checked) {
      const { selected } = display
      selected.push(e.target.value)
      const displayUpdated = { ...display, selected }
      // projectsAction.setDisplay(dispatch, displayUpdated);
    } else {
      const { selected } = display
      _.remove(selected, category => {
        return category === e.target.value
      })
      const displayUpdated = { ...display, selected }
      // projectsAction.setDisplay(dispatch, displayUpdated);
    }
  }

  return (
    <DefaultLayout>
      <div className="row">
        {/* <div className="medium-4 columns">
        <button className="button" onClick={() => {
          const displayUpdated = { ...display, filter: !display.filter };
          // projectsAction.setDisplay(dispatch, displayUpdated)
        }}>
          <span className="show-for-sr">{display.filter ? 'Hide ' : 'Show '}Filter</span>
          <span aria-hidden="true">
            <FontAwesomeIcon icon={'filter'} />
          </span>
        </button>
        <button className="button" onClick={() => {
          const displayUpdated = { ...display, listView: !display.listView };
          // projectsAction.setDisplay(dispatch, displayUpdated)
        }}>
          <span className="show-for-sr">{display.filter ? 'Icon ' : 'List '}View</span>
          <span aria-hidden="true">
            {display.listView ?
              <FontAwesomeIcon icon={'th-large'} /> : <FontAwesomeIcon icon={'list'} />}
          </span>
        </button>
      </div>
      <div className={`medium-8 columns ${display.filter ? '' : 'hide'}`}>
        <input type="text" value={display.term} name="filter" placeholder="filter..."
          onChange={((e) => {
            const displayUpdated = { ...display, term: e.target.value };
            // projectsAction.setDisplay(dispatch, displayUpdated)
          })} />
      </div> */}
      </div>
      <div className={`row ${display.filter ? '' : 'hide'}`}>
        <div className="large-12 columns">
          <div className="categories">
            {projects.getCategories().map(c => (
              <span key={c} className="label secondary animated fadeIn">
                <input
                  id={c}
                  value={c}
                  defaultChecked={_.indexOf(display.selected, c) > -1}
                  type="checkbox"
                  onChange={onCategorySelected}
                />
                <label htmlFor={c}>{c}</label>
              </span>
            ))}
            <button
              className={`button secondary ${!display.moreCategories ? 'hide' : ''}`}
              onClick={() => {
                const displayUpdated = { ...display, moreCategories: false }
                // projectsAction.setDisplay(dispatch, displayUpdated)
              }}
            >
              <span className="show-for-sr">Less Categories</span>
              <span aria-hidden="true">
                <FontAwesomeIcon icon="caret-left" />
              </span>
            </button>
            <button
              className={`button secondary ${display.moreCategories ? 'hide' : ''}`}
              onClick={() => {
                const displayUpdated = { ...display, moreCategories: true }
                // projectsAction.setDisplay(dispatch, displayUpdated)
              }}
            >
              <span className="show-for-sr">More Categories</span>
              <span aria-hidden="true">
                <FontAwesomeIcon icon="caret-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="row" ref={iconItemsRef}>
        {projects
          .getProjects()
          .map((project, index) =>
            display.listView ? (
              <ProjectItem project={project} key={project.getId()} />
            ) : (
              <ProjectItem2 project={project} index={index} key={project.getId()} />
            )
          )}
      </div>
    </DefaultLayout>
  )
}

export default Projects

export const query = graphql`
  query Projects {
    allMarkdownRemark(limit: 1000, filter: { fields: { layout: { eq: "project" } } }) {
      edges {
        node {
          fields {
            slug
            layout
          }
          frontmatter {
            layout
            title
            author
            created(formatString: "")
            git_url
            icon_url
            readme_md
            tags
            screenshots {
              title
              url
            }
          }
          id
          html
        }
      }
    }
  }
`
