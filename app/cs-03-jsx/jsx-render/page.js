// 客戶端元件(渲染在瀏覽器端)
'use client'

export default function JsxRenderPage() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <hr />
      <h2>number</h2>
      {1 - 1}
      {NaN}
      <h2>string</h2>
      這是一個字串
      {'這也是一個字串'}
      {`價格=${100 - 1}`}
      <h2>boolean</h2>
      {/* 不渲染呈現 */}
      {true}
      {false}
      <h2>null/undefined</h2>
      {/* 不渲染呈現 */}
      {null}
      {undefined}
      <h2>array</h2>
      {/* 類似 array.join('') */}
      {[1, 2, 3]}
      {['hello', 'b', 'c']}
      {[<p key="1">a</p>, <p key="2">b</p>]}
      <h2>object</h2>
      {/* 物件不能直接渲染，會有執行錯誤 */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>function</h2>
      {/* 函式不能直接渲染，會有警告or編譯錯誤 */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
    </>
  )
}
