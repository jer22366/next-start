'use client'

import { useState } from 'react'
// 範例資料
import data from './_data/books.json'
// 使用拆解出來的Item元件再組合套用
import Item from './item'

export default function List() {
  // 擴充一個能代表是否有加入收藏(我的最愛)的屬性fav，是一個布林值，預設是false
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  // 書籍用狀態
  const [books, setBooks] = useState(initState)

  // 處理切換fav屬性布林值
  const onToggleFav = (bookIsbn) => {
    const nextBooks = books.map((v) => {
      // 在陣列中找到isbn為傳入的bookIsbn的物件，並修改fav布林值為反相值(!v.fav)
      if (v.isbn === bookIsbn) return { ...v, fav: !v.fav }
      // 其它沒有影響的物件值直接返回
      else return v
    })

    // 設定到狀態
    setBooks(nextBooks)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>書名</th>
            <th>作者</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            
            return (
              <Item key={book.isbn} book={book} onToggleFav={onToggleFav} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}