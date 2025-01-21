'use client'

import Link from 'next/link'
import { apiURL } from '@/config'

export default function AddPage() {
  const url = `${apiURL}/posts`

  const handleSubmit = async (e) => {
    // 當需要自訂檢查與fetch(ajax)，要先阻擋表單預設行為
    // 預設行為`action="/" method="get"`
    e.preventDefault()

    const formData = new FormData(e.target)

    const title = formData.get('title')
    const content = formData.get('content')

    const res = await fetch(url, {
      // 新增使用的方法
      method: 'POST',
      // 設定要求的標題
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // 送出新增的資料(JSON格式)
      body: JSON.stringify({ title, content }),
    })

    // 得到回應資料
    const resData = await res.json()
    console.log(resData)

    if (resData.status === 'success') {
      // 清空欄位
      e.target.reset()
      // 跳出訊息
      alert('新增已完成!')
    } else {
      alert('新增失敗!')
    }
  }

  return (
    <>
      <h1>新增文章</h1>
      <Link href="/post/list">回列表頁</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        標題:
        <input type="text" name="title" required />
        <br />
        內容:
        <textarea name="content" required />
        <br />
        {/* 在表單的按鈕預設就是觸發form的submit事件 */}
        <button type="submit">新增</button>
      </form>
    </>
  )
}