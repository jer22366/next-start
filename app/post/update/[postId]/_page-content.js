'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import { apiURL } from '@/config';
import useSWR from 'swr'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PostUpdatePage() {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  })

  const url = `${apiURL}/posts`

  // 取得客戶端路由網址上的動態分段(postId)
  const params = useParams()
  // 注意data應為物件資料類型才渲染
  const { data, isLoading, error } = useSWR(
    `${apiURL}/posts/${params?.postId}`,
    fetcher
  )

  //  data.data.post
  const post = data?.data?.post
  console.log(post)

  const handleFieldChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

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

  // 以樣式3，監聽post更動，當有值後，設定到本頁的本地狀態
  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  return (
    <>
      <h1>修改文章</h1>
      <hr />
      <Link href="/post/list">回列表頁</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        標題:
        <input
          type="text"
          name="title"
          required
          value={postData.title}
          onChange={handleFieldChange}
        />
        <br />
        內容:
        <textarea
          name="content"
          required
          value={postData.content}
          onChange={handleFieldChange}
        />
        <br />
        {/* 在表單的按鈕預設就是觸發form的submit事件 */}
        <button type="submit">新增</button>
      </form>
    </>
  )
}