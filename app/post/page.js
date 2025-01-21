import { redirect } from 'next/navigation'

export default function PostPage() {
  //直接導向到列表頁
  redirect('/post/list')
  return (<></>)
}
