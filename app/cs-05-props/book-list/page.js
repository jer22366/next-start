'use client'

import React, { useState, useEffect } from 'react'
import List from './_components/list'

export default function BookListPage(props) {
  return (
    <>
      <h1>書籍清單範例-拆解組合元件</h1>
      <hr />
      <List/>
    </>
  )
}