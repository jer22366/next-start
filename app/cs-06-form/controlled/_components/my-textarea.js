'use client'

import { useState } from 'react'

export default function MyTextarea() {
  const [text, setText] = useState('')

  return (
    <>
      <h2>文字輸入區域(textarea)</h2>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </>
  )
}