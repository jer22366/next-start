
'use client'
import { useEffect, useState } from 'react'

export default function CounterPage() {
 
  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  //樣式1: 無第二個參數
  //每次渲染都會執行 專用或特殊鉤子 日至 除錯測試
  useEffect(() => {
    console.log('樣式1: 無第二個參數');
  })

  //樣式2: 第二個參數保持為空陣列
  //只在第一次渲染實執行 之後不再執行 相當於componentDidMount
  //用途: fetch/ajax 自訂事件 整合第三方函式庫 類似於真實dom ready
  useEffect(() => {
    console.log('樣式2: 第二個參數保持為空');
  }, [])

  //樣式3: 第二個參數陣列有相依變數
  //會在第一次渲染之後執行一次 然後當相依變數有變動之後再執行一次相當於didMount + didUpdate
  //用途: 狀態異步的解決方案 狀態連鎖變動解決方案
  useEffect(() => {
    console.log('樣式3: 第二個參數陣列有相依變數');
  }, [total,total2])
  // ^^^^^^^^^ 相依變數是total 意思是當total有變動時(類似監聽total的change事件) 才會執行這個effect才會執行這個effect


  //樣式4: 第一個傳入參數有return(回傳值) 稱為清理函式
  // 會在元件卸載"之前" 執行 相當於willUnmount
  // 通常搭配樣式2使用 資源釋放 事件解除 取消訂閱
  useEffect(() => {
    return () => {
        console.log('樣式4: 清理函式');
    }})
  return (
    <>
      <h1>useEffect應用的4個圖示</h1>
      <hr />
      
      <h1>{total}</h1>
      <button
        onClick={() => {
          const nextTotal = total + 1
          setTotal(nextTotal)
        }}
      >
        +1
      </button>

      <h1>{total2}</h1>
      <button
        onClick={() => {
          const nextTotal = total2 + 1
          setTotal2(nextTotal)
        }}
      >
        +1
      </button>
      
    </>
  )
}
