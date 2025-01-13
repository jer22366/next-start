'use client'

import { useState } from 'react'

export default function MyInput() {
  const [text, setText] = useState('')
  const [pass, setPass] = useState('')
  // 呈現密碼用的狀態
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h2>密碼輸入框</h2>
      <input
        type={show ? 'text' : 'password'}
        value={pass}
        onChange={(e) => {
          setPass(e.target.value)
        }}
      />
      <input
        type="checkbox"
        // 核取方塊是以checked(布林值)決定是否被勾選
        checked={show}
        onChange={(e) => {
          // 用事件觸發
          setShow(e.target.checked)
          // 反相
          //setShow(!show)
        }}
      />
      呈現密碼
    </>
  )
}