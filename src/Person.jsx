import React from 'react'

function Person({ name, age, image }) {
  return (
    <article>
      <img src={image} alt={name} />
    </article>
  )
}

export default Person
