import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserAlt,
  faSearch,
  faBlog,
  faHome,
  faBookmark,
  faBook,
  faBars,
  faSpinner,
  faFilter,
  faThLarge,
  faList,
  faCaretLeft,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import Helmet from 'react-helmet'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = props => {
  library.add(
    faUserAlt,
    faSearch,
    faBlog,
    faHome,
    faBookmark,
    faBars,
    faSpinner,
    faGithub,
    faFilter,
    faThLarge,
    faList,
    faCaretLeft,
    faCaretRight,
    faBook,
    faStackOverflow
  )

  const { children } = props
  return (
    <div id="page" className="site">
      <Helmet>
        <title>Coding Simply</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:500,900" rel="stylesheet" />
      </Helmet>
      <DefaultHeader />
      <div className="row">
        <div className="large-8 large-push-2 columns">
          <main className="site-main home">{children}</main>
        </div>
      </div>
    </div>
  )
}
export default DefaultLayout
