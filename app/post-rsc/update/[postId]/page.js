import db from '@/config/mysql'
import Link from 'next/link'
import UpdateForm from '../../_components/update-form'

export default async function PostUpdatePage({ params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  const postId = Number((await params).postId)

  // 用select查詢一定是陣列資料
  const [posts] = await db.query(`SELECT * FROM post WHERE id = ${postId};`)

  console.log(posts)
  // 只需要第一筆(索引值0)
  const post = posts[0]

  return (
    <>
      <h1>修改文章(RSC)</h1>
      <Link href="/post-rsc/list">回列表頁</Link>
      <hr />
      <UpdateForm post={post} />
    </>
  )
}