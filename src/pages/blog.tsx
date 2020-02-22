import React from 'react'
import { graphql } from 'gatsby'
import PostsList from '../components/PostsList'
import DefaultLayout from '../components/DefaultLayout'
import PostsModel from '../models/PostsModel'

interface PostTemplateProps {
  data: any
}

const Posts: React.SFC<PostTemplateProps> = ({ data }) => {
  const posts = PostsModel.fromGraph(data)
  return (
    <DefaultLayout>
      <PostsList posts={posts} />
    </DefaultLayout>
  )
}

export default Posts

export const query = graphql`
  query Posts {
    allMarkdownRemark(limit: 1000, filter: { fields: { layout: { eq: "post" } } }, sort: { fields: frontmatter___created, order: DESC }) {
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
            excerpt
          }
          id
        }
      }
    }
  }
`
