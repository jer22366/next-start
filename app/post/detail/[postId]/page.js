'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import { apiURL } from '@/config'
import useSWR from 'swr'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PostDetailPage() {
  // 取得客戶端路由網址上的動態分段(postId)
  const params = useParams()
  // 注意data應為物件資料類型才渲染
  const { data, isLoading, error } = useSWR(
    `${apiURL}/posts/${params?.postId}`,
    fetcher
  )

  //  data.data.post
  const post = data?.data?.post

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
      <h1>文章詳細頁</h1>
      <Link href="/post">回列表頁</Link>
      <hr />
      <p>標題: {post?.title}</p>
      <p>內容: {post?.content}</p>
    </>
  )
}