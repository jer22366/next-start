'use client'

import React, { useState, useEffect } from 'react'

import Child from './child'
export default function Parent(props) {
  
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 誰渲染(render)誰 */}
      {/* (父母)渲染(子女) */}
      {/* 父母可以透過類似HTML屬性值的方式，傳遞值到子女元件，但並不限於文字(字串)值 */}
      <Child title="React" price={100} isConnected={true}
        aa = {[1,2,3]} oa = {{a:1,b:2}} sum = {(x,y)=> x + y}
      />
    </>
  )
}
