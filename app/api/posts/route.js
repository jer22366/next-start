import db from '@/config/mysql'

// api路由(Route Handler)
export async function GET(request, { params }) {
  // const slug = (await params).slug
  const [posts] = await db.query(`SELECT * FROM post;`)
  console.log(posts)

  return Response.json({ status: 'success', data: { posts } })
}

export async function POST(request, { params }) {
  // const slug = (await params).slug

  return Response.json({ status: 'success', data: null })
}