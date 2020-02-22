import React from 'react'
import moment from 'moment'

interface Props {
  time: string
}

const DateTime = (props: Props) => {
  const { time } = props
  return <>{time ? <time>{moment(time).format('dddd, MMMM Do YYYY')}</time> : null}</>
}

export default DateTime
