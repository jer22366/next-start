'use client'

import { useState } from 'react'

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArrayPage() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 產生不重複id的方式
          // 1. uuid(nanoid另外安裝)
          // const newId = self.crypto.randomUUID()
          //
          // 2. 時間日期物件 `+new Date()`或`Date.now()`
          // const newId = Number(new Date())
          //
          // 3. 仿照資料庫資料表自動遞增id欄位(id必須數字值)
          // 提取所有的id為一個數字陣列 [1,2,3,4]
          const ids = data.map((v) => v.id)
          // 新id為最大值+1，如果陣列中沒有資料，則從1開始計算
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          const nextData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          //3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          // 留下文字不是b的 === 刪除文字為b
          const nextData = data.filter((v) => {
            return v.text !== 'b'
          })
          //3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 留下id不是4的 === 刪除id為4
          const nextData = data.filter((v) => {
            return v.id !== 4
          })
          //3
          setData(nextData)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <button
        onClick={() => {
          // splice(粘接)方法
          // 有副作用，會更動到呼叫它的陣列，所以不能用狀態直接呼叫
          // 它需要索引值，作為傳入參數，建議套用公式
          // 刪除公式: array.splice(deleteIndex, 1)

          // 1. 先找到要刪除的成員索引值
          const foundIndex = data.findIndex((v) => v.id === 4)

          // 2. 判斷是否有找到(沒找到會返回-1)
          if (foundIndex !== -1) {
            //2-1 拷貝(如果深度不足要深拷貝)
            const nextData = [...data]
            //2-2 在複本上套用刪除公式
            nextData.splice(foundIndex, 1)
            //2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        7-1. 刪除id為4的物件資料(splice)
      </button>
      <br />
      <button
        onClick={() => {
          // 使用map展開陣列
          const nextData = data.map((v) => {
            // 在陣列中找到id為3的物件，並取代文字為cccc
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 其它沒有影響的物件值直接返回
            else return v
          })

          // 設定到狀態
          setData(nextData)
        }}
      >
        (***)8. 取代id為3的文字為cccc
      </button>
      <button
        onClick={() => {
          // 1. 先找到要取代的成員索引值
          const foundIndex = data.findIndex((v) => v.id === 3)

          // 2. 判斷是否有找到(沒找到會返回-1)
          if (foundIndex !== -1) {
            //2-1 拷貝(如果深度不足要深拷貝)
            // const nextData = JSON.parse(JSON.stringify(data))
            const nextData = structuredClone(data)
            // 2-2 在複本上作修改
            nextData[foundIndex].text = 'cccc'
            //2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        8-1. 取代id為3的文字為cccc(深拷貝)
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        9. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          const nextData = []

          for (let i = 0; i < data.length; i++) {
            nextData.push(data[i])
            // 在id為2後面插入id為5與文字為bbb的物件
            if (data[i].id === 2) {
              nextData.push({ id: 5, text: 'bbb' })
            }
          }

          // 設定到狀態
          setData(nextData)
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件(for迴圈)
      </button>
      <button
        onClick={() => {
          // splice(粘接)方法
          // 有副作用，會更動到呼叫它的陣列，所以不能用狀態直接呼叫
          // 它需要索引值，作為傳入參數，建議套用公式
          // 插入成員在後面公式: array.splice(foundIndex+1, 0, insertItem)
          // 1. 先找到要取代的成員索引值
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 2. 判斷是否有找到(沒找到會返回-1)
          if (foundIndex !== -1) {
            // 2-1 拷貝(如果深度不足要深拷貝)
            const nextData = [...data]
            // 2-2 在複本上作修改
            nextData.splice(foundIndex + 1, 0, { id: 5, text: 'bbb' })
            //2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        10-1. 在id為2後面插入id為5與文字為bbb的物件(splice)
      </button>
    </>
  )
}
