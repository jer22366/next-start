'use client'

import React, { useState, useEffect } from 'react'

export default function MyRadioButton() {
    const [pet,setPet] = useState('dog')

    const petOptions = ["dog","cat","pig","rabbit"]
  return (
    <>
      <div>MyRadioButton</div>
      {petOptions.map((v,i) => {
        return (
            <label key={i}>
            <input type="radio" value={v}
                checked ={pet === v}
                onChange={(e) => {
                    setPet(e.target.value)
                }}
            />
            {v}
            </label>
        )
            
      })}
    </>
  )
}
