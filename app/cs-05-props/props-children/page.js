'use client'

import React, { useState, useEffect } from 'react'
import MyCom from './_components/my-com'
import Icon from './_components/icon'

export default function PropsChildrenPage() {
  return (
    <>
      <h1>Props children屬性範例</h1>
      <hr />
      <MyCom color="red">
        <Icon />
      </MyCom>
    </>
  )
}
