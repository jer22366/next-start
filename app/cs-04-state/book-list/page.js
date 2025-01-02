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
  
  //擴充一個能代表是否有加入收藏(我的最愛)的屬性，是一個布林值，預設是false
  const initState = data.map(v => {
    return {...v, fav: false}
  })

  //書籍用狀態
  const [books, setBooks] = useState(initState)

  //處理切換fav屬性布林值
  const onToggleFav = (bookIsbn) =>{
    const nextbooks = books.map(v => {
      if(v.isbn === bookIsbn){
        return {...v, fav: !v.fav}
      }else{
        return v
      }
    })
    setBooks(nextbooks)
  }
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map( book => {
            return (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Image src={book.fav ? bookmarkIconFill : bookmarkIcon} alt="" onClick={() =>{
                    onToggleFav(book.isbn)
                  }}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
