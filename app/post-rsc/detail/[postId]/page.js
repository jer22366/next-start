import Link from 'next/link'
import db from '@/config/mysql'

export default async function PostRscDetailPage({ params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  const postId = Number((await params).postId)

  // 用select查詢一定是陣列資料
  const [posts] = await db.query(`SELECT * FROM post WHERE id = ${postId};`)

  console.log(posts)
  // 只需要第一筆(索引值0)
  const post = posts[0]

  return (
    <>
      <h1>文章詳細頁(RSC)</h1>
      <Link href="/post-rsc">回列表頁</Link>
      <hr />
      <p>標題: {post?.title}</p>
      <p>內容: {post?.content}</p>
    </>
  )
}