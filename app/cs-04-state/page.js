'use client'

import React, { useState, useEffect } from 'react'

export default function Cs04StatePage() {
  // const oa = { a: 1, b: 2 }
  // 拷貝語法(展開運算子) == 淺拷貝(shallow) copy/clone
  // const ob = { ...oa }

  // console.log('oa', oa)
  // console.log('ob', ob)

  // oa.b = 9

  // console.log('oa', oa)
  // console.log('ob', ob)

  // -----------

  const oc = { a: 1, b: { x: 2 } }
  // 拷貝語法(展開運算子) == 淺拷貝(shallow) copy/clone
  // const od = { ...oc }
  // 深拷貝語法
  // const od = JSON.parse(JSON.stringify(oc))
  // 深拷貝方法(內建)
  const od = structuredClone(oc)

  oc.b.x = 999

  console.log('oc', oc)
  console.log('od', od)

  return (
    <>
      <div>Cs04State Page</div>
    </>
  )
}
