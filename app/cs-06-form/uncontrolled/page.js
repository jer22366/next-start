'use client'

import React, { useState, useEffect } from 'react'
import MyInputId from './_components/my-input-id'
import MyInputRefs from './_components/my-input-refs'

export default function UncontrolledPage(props) {
  return (
    <>
      <h1>不可控元件表單</h1>
     <hr />
     <MyInputId/>
     <MyInputRefs/>
     
    </>
  )
}
