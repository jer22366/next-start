'use client'

import React, { useState, useEffect } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // C->P + P->C: 在父母元件中先準備好一組狀態，是要讓子女元件b設定要傳給父母的資料用的
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* P->C 子女元件a得到狀態 */}
      <ChildA dataFromChild={dataFromChild} />
      {/* C->P: 把設定狀態的函式，透過屬性傳給子女元件b */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
