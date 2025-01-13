'use client'

import React, { useState, useEffect } from 'react'

// 子女元件可以透過函式的傳入參數得到父母元件傳來的值，稱為屬性值(props)。props必定為一個物件值。
// 因為元件有純函式(pure function)的設計原則，對於從父母元件得到的傳入參數props是不可以改變的(唯讀的)
// 通常會使用函式傳入參數的解構語法，先提取所有屬性為可用變數名。再加上函式傳入參數預設值語法，作為元件屬性的預設值
// 目的1: 讓程式碼更簡潔，免除每次使用屬性值都要用"props.xxxx"
// 目的2: 能額外定義屬性預設值，提供備援(或保護性質的語法)
// 注意: 一定要加花括號({})，才是物件解構語法
export default function Child({
  title = '', // 這裡是用=號，指定預設值
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
