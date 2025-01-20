'use client'

import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import useSWR from 'swr'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PostPage() {
  const url = 'http://localhost:3005/api/posts'

  // 注意data必須為陣列資料類型才render
  const { data, isLoading, error } = useSWR(url, fetcher)
  // data.data.posts
  const posts = data?.data

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
      <h1>文章列表頁</h1>
      <hr />
      <ul>
        {/* 注意data必須為陣列資料類型才render */}
        {posts?.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-07-effect/post/detail?id=${v.id}`}>
                {v.myTitle}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}