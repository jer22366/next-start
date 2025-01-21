import db from '@/config/mysql'

// api路由(Route Handler)
export async function GET(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  const postId = (await params).postId

  console.log(postId)

  // 用select查詢一定是陣列資料
  const [posts] = await db.query(`SELECT * FROM post WHERE id = ${postId};`)

  console.log(posts)
  // 只需要第一筆(索引值0)
  const post = posts[0]

  return Response.json({ status: 'success', data: { post } })
}

export async function PUT(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  const postId = (await params).postId

  return Response.json({ status: 'success', data: null })
}

export async function DELETE(request, { params }) {
  // 從動態路由參數中得到postId (對應資料夾名稱)
  const postId = (await params).postId

  return Response.json({ status: 'success', data: null })
}