'use client'

import React, { useState, useEffect } from 'react'

export default function FormValidPage() {
  const [user, setUser] = useState({
    username: '', // 屬性名稱要對應到表單元件的name屬性
    password: '',
  })

  // 定義一個自訂錯誤訊息的狀態
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // 多欄位共用的事件處理
  const handleFieldChange = (e) => {
    // 觀察事件物件
    console.log(e.target.name, e.target.value, e.target.type)

    // es6的計算屬性名稱語法(Computed property names)
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%A8%88%E7%AE%97%E5%B1%AC%E6%80%A7%E5%90%8D%E7%A8%B1
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  // 表單送出
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    // 也可以用FormData
    // 這裡示範用user物件作表單資料驗証

    // 定義一個全新的錯誤物件
    const newErrors = {
      username: '',
      password: '',
    }

    if (user.username === '') {
      newErrors.username = '帳號必填'
    }
    
    if (user.password.length < 6) {
      newErrors.password = '密碼長度要大於6'
    }

    if (user.password === '') {
      newErrors.password = '密碼必填'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)
    // 判斷是否有錯誤。在newErrors物件中，如果每個屬性值中其一不是空字串，表示有錯誤
    const hasErrors = Object.values(newErrors).some((v) => v !== '')
    // 如果有錯誤就不送出(跳出函式)
    if (hasErrors) return

    // 這裡是檢查沒問題，可以送資料到伺服器
    alert('表單送出')
  }

  return (
    <>
      <h1>表單驗証範例</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          帳號:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            // 使用同一個事件處理函式
            onChange={handleFieldChange}
          />
          {/* 顯示錯誤訊息 */}
          {errors.username && <small>{errors.username}</small>}
        </div>
        <div>
          密碼:{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            // 使用同一個事件處理函式
            onChange={handleFieldChange}
          />
          {/* 顯示錯誤訊息 */}
          {errors.password && <small>{errors.password}</small>}
        </div>
        <button>登入</button>
      </form>
    </>
  )
}