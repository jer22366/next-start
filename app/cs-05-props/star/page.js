'use client'

import React, { useState, useEffect } from 'react'
import StarRating from './_components/star-rating'
import { FaStar } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

export default function StarPage(props) {
  const [r1, setR1] = useState(3)
  const [r2, setR2] = useState(1)
  return (
    <>
      <h1>StarRating元件測試頁</h1>
      <hr />
      <h2>對照組(無屬性)</h2>
      <StarRating/>
      <hr />
      <h2>實驗組</h2>
      <StarRating value={r1} maxCount={6} onChange={setR1} fillColor='blue' emptyColor='#333' icon={<FaStar/>}/>
      <div> r1:{r1}</div>
      <button onClick={() => setR1(6)}>setR1(6)</button>
      <StarRating value={r2} maxCount={10} onChange={setR2} fillColor='red' emptyColor='#333' icon={<FaHeartbeat/>}/>
    </>
  )
}
