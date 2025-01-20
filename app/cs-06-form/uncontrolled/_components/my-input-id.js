'use client'

import React, { useState, useEffect } from 'react'

export default function MyInputId(props) {
  return (
    <>
      <h2>MyInputId</h2>
    <input type="text" id='myInput' />
    <button onClick={() => {
      console.log(document.querySelector("#myInput").value)
    }}>
    獲得值
    </button>
    <button onClick={() => {
     document.querySelector("#myInput").value ="abc123"
    }}>
    設定值
    </button>
    <button onClick={() => {
     document.querySelector("#myInput").focus()
    }}>
    聚焦
    </button>
    </>
  )
}
