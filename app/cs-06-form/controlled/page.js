'use client'

import React, { useState, useEffect } from 'react'
import MyInput from './_components/my-input'
import MyTextarea from './_components/my-textarea'
import MyRadioButton from './_components/my-radio-button'
import MySelect from './_components/my-select'
import MyCheckboxes from './_components/my-checkboxes'
export default function ControlledPage(props) {
  return (
    <>
      <h1>可控表單元件(controlled)</h1>
      <hr />
      {/* <MyInput></MyInput>
      <MyTextarea></MyTextarea> */}
      {/* <MyRadioButton></MyRadioButton> */}
      {/* <MySelect></MySelect> */}
      <MyCheckboxes></MyCheckboxes>
    </>
  )
}
