// 路由: /api/posts
import db from '@/config/mysql'

// 多筆資料: api路由(Route Handler)
export async function GET(request, { params }) {
  // const slug = (await params).slug
  const [posts] = await db.query(`SELECT * FROM post;`)
  console.log(posts)

  return Response.json({ status: 'success', data: { posts } })
}

// api路由(Route Handler)
export async function POST(request, { params }) {
  // 從request得到body資料
  const body = await request.json()
  console.log(body)
  // 從body得到title, content資料
  const { title, content } = body

  // 執行查詢
  const [result] = await db.query(
    `INSERT INTO post (title, content) VALUES ('${title}', '${content}');`
  )
  console.log(result)

  return Response.json({ status: 'success', data: null })
}