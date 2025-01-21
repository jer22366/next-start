
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Oval } from 'react-loader-spinner'
import useSWR from 'swr'
import { apiURL } from '@/config'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PostListPage() {
  const url = `${apiURL}/posts`

  const router = useRouter()

  // 注意data必須為陣列資料類型才render
  const { data, isLoading, error, mutate } = useSWR(url, fetcher)
  // data.data.posts
  const posts = data?.data?.posts

  const deletePost = async (postId) => {
    const res = await fetch(`${url}/${postId}`, {
      method: 'DELETE',
    })

    // 得到回應資料
    const resData = await res.json()
    console.log(resData)

    if (resData.status === 'success') {
      alert('刪除已完成!')
      // 手動強制重新驗証目前列表資料，向伺服器重新要求資料，更新列表資料
      mutate()
    } else {
      alert('刪除失敗!')
    }
  }

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
      <Link href="/post/add">新增文章</Link>
      <hr />
      <ul>
        {/* 注意data必須為陣列資料類型才render */}
        {posts?.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`/post/detail/${v.id}`}>{v.title}</Link>
              <button
                onClick={() => {
                  if (confirm('確定要刪除此文章?')) {
                    deletePost(v.id)
                  }
                }}
              >
                刪除
              </button>
              <button
                onClick={() => {
                  router.push(`/post/update/${v.id}`)
                }}
              >
                編輯
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
