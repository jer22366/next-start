'use client'

// import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import useSWR from 'swr'
import { apiURL } from '@/config'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PostUpdatePage() {
  // 取得客戶端路由網址上的動態分段(postId)
  const params = useParams()
  // 獲得單筆資料和更新單筆資料的網址實際是同一個，但method不同
  const url = `${apiURL}/posts/${params?.postId}`
  // 注意data應為物件資料類型才渲染
  const { data, isLoading, error } = useSWR(url, fetcher)

  //  data.data.post
  const post = data?.data?.post
  console.log(post)

  const handleSubmit = async (e) => {
    // 當需要自訂檢查與fetch(ajax)，要先阻擋表單預設行為
    // 預設行為`action="/" method="get"`
    e.preventDefault()

    const formData = new FormData(e.target)

    const title = formData.get('title')
    const content = formData.get('content')

    const res = await fetch(url, {
      // 新增使用的方法
      method: 'PUT',
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
      // 跳出訊息
      alert('更新已完成!')
    } else {
      alert('更新失敗!')
    }
  }

  // 載入動畫
  if (isLoading) {
    return (
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    )
  }

  return (
    <>
      <h1>修改文章</h1>
      <Link href="/post/list">回列表頁</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        標題:
        <input
          type="text"
          name="title"
          required
          // 用defaultValue設定value值，當post有值後會設定上去(重新渲染後)
          defaultValue={post ? post?.title : ''}
        />
        <br />
        內容:
        <textarea
          name="content"
          required
          // 用defaultValue設定value值，當post有值後會設定上去(重新渲染後)
          defaultValue={post ? post?.content : ''}
        />
        <br />
        {/* 在表單的按鈕預設就是觸發form的submit事件 */}
        <button type="submit">更新</button>
      </form>
    </>
  )
}