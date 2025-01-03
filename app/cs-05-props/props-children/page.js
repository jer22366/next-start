'use client'

import React, { useState, useEffect } from 'react'
import MyCom from './_components/my-com';
import Icon from './_components/icon';
export default function Page(props) {
  return (
    <>
        <h1>Props children</h1>
        <hr />
        <MyCom>
            <p>這是一個文字的範例</p>
            <p>這是一個文字的範例</p>
            <p>這是一個文字的範例</p>
            <p>這是一個文字的範例</p>
            <h2>測試</h2>
            <Icon/>
        </MyCom>
    </>
  )
}
