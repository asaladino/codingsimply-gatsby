import React from 'react'

interface Props {
  categories: string[]
}

const Categories = (props: Props) => {
  const { categories } = props
  return (
    <>
      {categories.map(c => (
        <span key={c} className="label secondary">
          {c}
        </span>
      ))}
    </>
  )
}

export default Categories
