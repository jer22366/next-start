'use client'

import React, { useState, useEffect } from 'react'

export default function MyCheckboxes(props) {
  const petOptions = ["dog","cat","pig","rabbit"]

  const initState = petOptions.map((v,i) => {
    return { id: i+1,name:v,checked:false}
  })
  const [pets,setPets] = useState(initState)
  return (
    <>
      <h2>核取方塊群組(checkboxes)</h2>
      {pets.map((pet,i) => {
        return <label key={pet.id}>
          <input type="radio" />{pet.name}
        </label>
      })}
    </>
  )
}
