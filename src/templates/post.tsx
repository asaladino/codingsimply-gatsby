import * as React from 'react'
import { graphql } from 'gatsby'

import DefaultLayout from '../components/DefaultLayout'
import PostModel from '../models/PostModel'
import FractureTitle from '../components/FractureTitle'
import DateTime from '../components/DateTime'
import Highlight from "react-highlight";
import { loadInlineScripts, contentImageLoading } from "../components/helpers/InlineScriptHelper";

interface PostTemplateProps {
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

const PostTemplate: React.SFC<PostTemplateProps> = ({ data }) => {

  const post = PostModel.fromGraph({ node: data.markdownRemark });

  const contentClickHandler = (e, history) => { }

  setTimeout(() => {
    loadInlineScripts();
    // contentImageLoading();
  }, 1000);

  return <DefaultLayout>
    <div id="root" className='animated fadeIn' key={post.getId()}>
      <h2><FractureTitle split={'word'}>{post.getTitle()}</FractureTitle></h2>
      <div style={{ clear: 'both' }}>
        <DateTime time={post.getDate()} />
        <div className="content" onClick={(e) => contentClickHandler(e, history)}>
          <Highlight innerHTML={true}>
            {post.getContent()}
          </Highlight>
        </div>
      </div>
    </div>
  </DefaultLayout>
}

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
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
      html
      excerpt
      frontmatter {
        title
      }
      fields {
        layout
        slug
      }
    }
  }
`
