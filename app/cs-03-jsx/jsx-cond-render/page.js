'use client'

import { useState } from 'react'

export default function JsxCondRenderPage() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX條件式渲染(conditional render)</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <hr />
      {/* if表達式語法(&&運算子)，因為判斷方式是falsy，所以會有不精確的情況，在total是0或NaN時一樣會渲染出來 */}
      {total && <p>1.目前的total是{total}</p>}
      {/* 強制轉換判斷條件為布林值 */}
      {!!total && <p>2.目前的total是{total}</p>}
      {Boolean(total) && <p>3.目前的total是{total}</p>}
      {/* 使用"比較運算子"(大於、等於…)，一定會運算出布林值 */}
      {total > 0 && <p>4.目前的total是{total}</p>}
      {total !== 0 && <p>5.目前的total是{total}</p>}
      {/* 改用三元運算子(相當於if...else) */}
      {total ? <p>6.目前的total是{total}</p> : ''}
    </>
  )
}
