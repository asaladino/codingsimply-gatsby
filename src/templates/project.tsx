import * as React from 'react'
import { graphql } from 'gatsby'

import Slider from 'react-slick/lib'
import Highlight from 'react-highlight'
import DefaultLayout from '../components/DefaultLayout'
import ProjectModel from '../models/ProjectModel'
import ProjectIcon from '../components/ProjectIcon'
import FractureTitle from '../components/FractureTitle'
import Categories from '../components/Categories'

interface ProjectTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const ProjectTemplate: React.SFC<ProjectTemplateProps> = ({ data }) => {
  const project = ProjectModel.fromGraph({ node: data.markdownRemark })

  const galleryImage = (image: any) => {
    if (image) {
      return (
        <div>
          <img alt={image.alt} src={image.url} />
        </div>
      )
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: false,
    pauseOnFocus: true
  }

  return (
    <DefaultLayout>
      <div className="row animated fadeIn">
        <div className="large-3 medium-4 small-6 columns">
          {project.hasIcon() ? (
            <img alt={project.getTitle()} src={project.getIconUrl()} />
          ) : (
            <ProjectIcon initials={project.getInitials()} />
          )}
        </div>
        <div className="large-9 medium-8 small-6 columns">
          <h2 className="entry-title">
            <FractureTitle split="word">{project.getTitle()}</FractureTitle>
          </h2>
          <div className="text-right" style={{ clear: 'both' }}>
            {project.getGitUrl() ? (
              <a className="button secondary" href={project.getGitUrl()} rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github" aria-hidden="true">
                  {' '}
                </i>
                Fork on Github
              </a>
            ) : (
              ''
            )}
          </div>
          <div className="project-item-details">
            <Categories categories={project.categories} />
          </div>
        </div>
      </div>
      <div className="entry-content">
        <div className="row">
          <div className="large-12 columns content">
            <Highlight innerHTML>{project.getContent()}</Highlight>
          </div>
        </div>
        <div className="row">
          <div className="small-10 small-push-1 columns" style={{ maxHeight: '900px' }}>
            <Slider {...settings}>
              {galleryImage(project.getScreenshot())}
              {galleryImage(project.getScreenshot2())}
              {galleryImage(project.getScreenshot3())}
              {galleryImage(project.getScreenshot4())}
              {galleryImage(project.getScreenshot5())}
            </Slider>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`
