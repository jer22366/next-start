'use client'

import React, { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild = () => {} }) {
  const [cData, setCData] = useState('child-b data')

  // 方式2: 此樣式在子女元件b首次渲染之後，會執行一次第一個傳入參數回呼函式中的程式碼
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>ChildB(子女元件)</h3>
      <button
        onClick={() => {
          // 設定狀態的函式，本身具有react中所定義的副作用
          // 方式1: 需要在事件處理函式中使用
          setDataFromChild(cData)
        }}
      >
        回傳資料到Parent(父母元件)
      </button>
    </>
  )
}