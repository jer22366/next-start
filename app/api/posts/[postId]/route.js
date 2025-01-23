// 路由: /api/posts/:postId
import db from '@/config/mysql'

// 單筆資料: api路由(Route Handler)
export async function GET(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  // 需要轉成數字資料類型
  const postId = Number((await params).postId)

  console.log(typeof postId, postId)

  // 用select查詢一定是陣列資料
  const [posts] = await db.query(`SELECT * FROM post WHERE id = ${postId};`)

  console.log(posts)
  // 只需要第一筆(索引值0)
  const post = posts[0]

  return Response.json({ status: 'success', data: { post } })
}

export async function PUT(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  // 需要轉成數字資料類型
  const postId = Number((await params).postId)
  // 從request得到body資料
  const body = await request.json()
  console.log(body)

  // 從body得到title, content資料
  const { title, content } = body
  // 執行查詢
  const [result] = await db.query(
    `UPDATE post SET title = '${title}', content = '${content}' WHERE id = ${postId};`
  )
  console.log(result)

  return Response.json({ status: 'success', data: null })
}

export async function DELETE(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  // 需要轉成數字資料類型
  const postId = Number((await params).postId)

  // 執行查詢
  const [result] = await db.query(`DELETE FROM post WHERE id = ${postId};`)
  console.log(result)

  return Response.json({ status: 'success', data: null })
}