'use client'

import React, { useState, useEffect } from 'react'

import StarRating from './_components/star-rating'
import { MdStars } from 'react-icons/md'
import { BsArrowThroughHeartFill } from 'react-icons/bs'

export default function StarPage() {
  const [r1, setR1] = useState(3)
  const [r2, setR2] = useState(5)

  return (
    <>
      <h1>StarRating元件測試頁</h1>
      <hr />
      <h2>對照組(無屬性)</h2>
      <StarRating />
      <hr />
      <h2>測試組</h2>
      <StarRating
        fillColor="blue"
        emptyColor="#333"
        value={r1}
        maxCount={6}
        onChange={setR1}
        icon={<MdStars />}
      />
      <p>目前評了{r1}分</p>
      <StarRating
        fillColor="pink"
        emptyColor="#ff9900"
        value={r2}
        maxCount={8}
        onChange={setR2}
        icon={<BsArrowThroughHeartFill />}
      />
      <p>目前評了{r2}分</p>
    </>
  )
}
