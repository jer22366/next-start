'use client'

import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '../_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '../_icons/bookmark.svg'

// 拆解出book物件，只傳遞所需的isbn與fav，是為了符合"最少權限原則"
export default function FavIcon({
  isbn = '',
  fav = false,
  onToggleFav = () => {},
}) {
  return (
    <>
      {/* 只有使用Image元件才能使用導入(import)的圖片 */}
      <Image
        // 判斷有無加入收藏，有(true)出現實心圖示，無(false)為空心圖示
        onClick={() => {
          onToggleFav(isbn)
        }}
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
