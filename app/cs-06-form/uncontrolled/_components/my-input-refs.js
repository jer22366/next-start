'use client'

import { useRef } from 'react'

export default function MyInputRefs() {
  // 1. 定義ref
  // 宣告後會得到 `inputRef = { current: null }`
  // 會使用null作為初始值，是對照原本使用querySelector或getElementById取得的DOM節點實體物件參照，在沒有取得DOM元素時，會返回null
  const inputRef = useRef(null)

  return (
    <>
      <h2>MyInputRefs</h2>
      {/* 2. 設定ref屬性在要使用的DOM元素上 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3. 當需要元素實體DOM元素引用(參照)時，使用inputRef.current來呼叫或套用
          console.log(inputRef.current?.value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          inputRef.current.value = 'abc456'
        }}
      >
        設定值
      </button>
      <button
        onClick={() => {
          inputRef.current?.focus()
        }}
      >
        聚焦
      </button>
    </>
  )
}