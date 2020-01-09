import React from 'react';
import _ from 'lodash';

import DefaultLayout from '../components/DefaultLayout';
import { graphql } from 'gatsby';
import BooksModel from '../models/BooksModel';

interface BooksTemplateProps {
    data: any
}

const Books: React.SFC<BooksTemplateProps> = ({ data }) => {

    console.log(data)
    const books = BooksModel.fromGraph(data);
    console.log(books)
    return <DefaultLayout>
        <div className="row">
            {books.map((book, index) => {
                return <div key={index} className={`animated zoomIn`} style={{ animationDelay: _.random(200, 600) + "ms" }}>
                    <div className="large-3 medium-3 small-6 columns">
                        <div className="callout text-center no-border project-item">
                            <img alt={book.title} src={book.cover} />
                            <strong>{book.title}</strong>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </DefaultLayout>
};

export default Books;


export const query = graphql`query Books {
    allMarkdownRemark(limit: 1000, filter: {fields: {layout: {eq: "book"}}}) {
      edges {
        node {
          fields {
            slug
            layout
          }
          frontmatter {
            title
            created(formatString: "")
            cover
          }
          id
          html
        }
      }
    }
  }
  `
