import * as React from 'react'

import DefaultLayout from '../components/DefaultLayout'
import FractureTitle from '../components/FractureTitle'

const PageTwo = () => (
  <DefaultLayout>
    <h2>
      <FractureTitle split="word">Privacy Policy</FractureTitle>
    </h2>
    <div className="content" style={{ clear: 'both' }}>
      <p>Coding Simply does NOT collect any user data or distribute user data to anyone. Done.</p>
    </div>
  </DefaultLayout>
)

export default PageTwo
