//客戶端元件必須加 'use client'
'use client';

// 從react函式庫導入 useState 鉤子 讓函式型元件可以使用狀態(state)
import { useState } from 'react';

export default function CounterPage() {
  //定義一組狀態 使用"陣列解構賦值"語法
  // [獲得值的變數, 設定值的方法] = useState(初始值)
  const [total, setTotal] = useState(0);
//   function autoCounter(){
//     setTotal(total + 1);
    
//   }
  
  // return 相當於元件的渲染(render)呈現部分
  return (
    <>
      <h1>計數器</h1>
      <hr />
      <h1>{total}</h1>

      {/* <h1>{setInterval(autoCounter,100)}</h1> */}

      <button
        onClick={() => {
            //onClick 是react內部加入的"人造(synthetic)事件"
            // 在react應用中, 只有呼叫setTotal才能更動total
          setTotal(total + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
