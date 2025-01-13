'use client'

import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from './_data/books.json'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'

export default function BookListPage() {
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
      <h1>書籍清單</h1>
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
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  {/* 只有使用Image元件才能使用導入(import)的圖片 */}
                  <Image
                    // 判斷有無加入收藏，有(true)出現實心圖示，無(false)為空心圖示
                    onClick={() => {
                      onToggleFav(book.isbn)
                    }}
                    src={book.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
