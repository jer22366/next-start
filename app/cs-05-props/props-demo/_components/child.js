'use client'

import React, { useState, useEffect } from 'react'


//子女元件可以通過函式的傳入參數得到父母傳來的值，稱為屬性值(props)
//props必為一個物件值
//因為元件有純函式(pure function)的設計，對於從父母元件得到的傳入參數props式不可以改變的(唯讀的)
export default function Child(props) {
  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title = {props.title}</p>
      <p>price = {props.price}</p>
      <p>isConnected = {JSON.stringify(props.isConnected)}</p>
      <p>aa = {JSON.stringify(props.aa)}</p>
      <p>oa = {JSON.stringify(props.oa)}</p>
      <p>sum(1,2) = {props.sum(1,2)}</p>
      <p>h1 = {props.h}</p>
    </>
  )
}
