import * as React from 'react'
import { graphql } from 'gatsby'

import DefaultLayout from '../components/DefaultLayout'
import BookModel from '../models/BookModel'

interface BookTemplateProps {
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

const BookTemplate: React.SFC<BookTemplateProps> = ({ data }) => {
  const book = BookModel.fromGraph({ node: data.markdownRemark })

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
        {/* <div className="large-3 medium-4 small-6 columns">{book.getTitle()}</div> */}
        <div className="large-9 medium-8 small-6 columns" />
      </div>
    </DefaultLayout>
  )
}

export default BookTemplate

export const query = graphql`
  query BookTemplateQuery($slug: String!) {
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
