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
          {/* // 拆解出book物件，只傳遞所需的isbn與fav，是為了符合"最少權限原則" */}
          <FavIcon isbn={book.isbn} fav={book.fav} onToggleFav={onToggleFav} />
        </td>
      </tr>
    </>
  )
}
