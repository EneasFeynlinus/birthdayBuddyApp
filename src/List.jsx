import React from 'react'

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        console.log(person)
      })}
    </section>
  )
}

export default List
