// 客戶端元件必須加 'use client'
'use client'

// 從react函式庫導入 useState 勾子，讓函式型元件可以使用狀態(state)
import { useState } from 'react'

export default function CounterPage() {
  // 定義一組狀態，使用"陣列解構賦值"語法
  // [獲得值的變數, 設定值的方法] = useState(初始值)
  const [total, setTotal] = useState(0)
  //
  const [username, setUsername] = useState('')

  // return 相當於元件的渲染(render)呈現部份
  return (
    <>
      <h1>計數器</h1>
      <hr />
      帳號:
      <input
        type="text"
        value={username}
        onChange={(e) => {
          const nextUsername = e.target.value
          setUsername(nextUsername)
          // 模擬和伺服器馬上檢查這帳號是否重覆可用
          console.log(nextUsername)
        }}
      />
      {/* 加入花括號在JSX中嵌入js的值或表達式 */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          // onClick是react內部加入的"人造(synthetic)事件"屬性
          // 在react應用中，只有呼叫setTotal才能更動total
          const nextTotal = total + 1
          setTotal(nextTotal)
        }}
      >
        +1
      </button>
    </>
  )
}
