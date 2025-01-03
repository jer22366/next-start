'use client'

// 套用拆出的FavIcon子女元件
import FavIcon from './fav-icon'

export default function Item({ book = {}, onToggleFav = () => {} }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <FavIcon isbn={book.isbn} fav={book.fav} onToggleFav={onToggleFav} />
        </td>
      </tr>
    </>
  )
}