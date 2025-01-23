import Link from 'next/link'
import db from '@/config/mysql'
import List from '../_components/list'

// 此rsc頁面元件作為"元件階層資料存取"
export default async function PostRscListPage() {
  // 與資料庫連線查詢資料
  const [posts] = await db.query(`SELECT * FROM post;`)
  // 除錯
  // console.log(posts)

  return (
    <>
      <h1>文章列表頁(RSC)</h1>
      <Link href="/post-rsc/add">新增文章</Link>
      <hr />
      {/* 渲染與由props傳遞資料到 CC(客戶端元件) */}
      <List posts={posts} />
    </>
  )
}