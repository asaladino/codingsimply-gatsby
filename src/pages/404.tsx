import * as React from 'react'

import DefaultLayout from '../components/DefaultLayout'
import FractureTitle from '../components/FractureTitle'

const NotFoundPage = () => (
  <DefaultLayout>
    <h2>
      <FractureTitle animated={['bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInRight']}>Bummer, nothing found.</FractureTitle>
    </h2>
  </DefaultLayout>
)

export default NotFoundPage
