// 伺服器端元件專用方法
import { redirect } from 'next/navigation'

export default function UpdatePage() {
  // 直接導向到 列表頁
  redirect('/post-rsc/list')
  return <></>
}