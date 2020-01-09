import * as React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '../components/DefaultLayout'
import FractureTitle from '../components/FractureTitle'

const IndexPage = () => (
  <DefaultLayout>
    <h1>
      <FractureTitle split={'word'}>Hello everyone, my name is Adam.</FractureTitle>
    </h1>
    <h4 className="subheader" style={{ clear: 'both' }}>
      I am software developer. I like to find creative, simple solutions to problems. I use
                        different languages and stacks as tools to build solutions to ideas. Checkout{' '}
      <Link to={`/projects/`}>my work</Link> and see if there is something you like.
    </h4>
  </DefaultLayout>
)

export default IndexPage
