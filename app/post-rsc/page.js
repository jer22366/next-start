import { redirect } from 'next/navigation'

export default function PostRSCPage() {
  //直接導向到列表頁
  redirect('/post-rsc/list')
  return (<></>)
}
