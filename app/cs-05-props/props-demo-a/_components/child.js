'use client'

import React, { useState, useEffect } from 'react'


//子女元件可以通過函式的傳入參數得到父母傳來的值，稱為屬性值(props)
//props必為一個物件值
//因為元件有純函式(pure function)的設計，對於從父母元件得到的傳入參數props式不可以改變的(唯讀的)
export default function Child({
  title = '',
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  // console.log(props)

  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
    </>
  )
}