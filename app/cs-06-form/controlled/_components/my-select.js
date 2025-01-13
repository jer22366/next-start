'use client'

import React, { useState, useEffect } from 'react'

export default function MySelect(props) {
  const [pet,setPet] = useState('')
 
     const petOptions = ["dog","cat","pig","rabbit"]
   return (
     <>
       <div>MyRadioButton</div>
      <select 
      //
      value ={pet} onChange={(e) => {
        setPet(e.target.value)
      }}>
        <option value="">請選擇</option>
        {petOptions.map((v,i) => {
            return(
                <option key={i} value={i}>{v}</option>
            )
        })}
      </select>
             
          
        
             
      
     </>
   )
}
