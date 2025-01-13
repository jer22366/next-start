'use client'

import React, { useState, useEffect } from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 誰渲染render誰 */}
      {/* (父母)渲染render(子女) */}
      {/* 父母元件可以透過類似HTML屬性值的給定方式，傳遞值到子女元件，但並不限於文字(字串)值 */}
      <Child
        title="React"
        price={100}
        isConnected={true}
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 2 }}
        sum={(x, y) => x + y}
      />
      <Child />
    </>
  )
}
