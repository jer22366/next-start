import Link from 'next/link'
import AddForm from '../_components/add_form'

export default function AddPage() {
  return (
    <>
      <h1>新增文章</h1>
      <Link href="/post-rsc/list">回列表頁</Link>
      <hr />
      <AddForm />
    </>
  )
}