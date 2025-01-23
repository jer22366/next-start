'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import DeleteForm from './delete-form'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function List({ posts = [] }) {
  // 接收刪除表單元件來的狀態
  const [deleteState, setDeleteState] = useState(null)
  // 宣告
  const router = useRouter()

  // 控制要跳出訊息，與重新載入RSC的資料
  useEffect(() => {
    if (deleteState?.status === 'success') {
      // 呈現土司訊息
      toast.success(deleteState?.message)
      // 重新整理
      router.refresh()
      // 重置deleteState
      setDeleteState({ ...deleteState, status: '', message: '' })
    }

    if (deleteState?.status === 'error') {
      // 呈現土司訊息
      toast.error(deleteState?.message)
      // 重置deleteState
      setDeleteState({ ...deleteState, status: '', message: '' })
    }
  }, [deleteState])

  return (
    <>
      <ul>
        {posts.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`/post-rsc/detail/${v.id}`}>{v.title}</Link>
              <DeleteForm postId={v.id} setDeleteState={setDeleteState} />
              <button
                onClick={() => {
                  router.push(`/post-rsc/update/${v.id}`)
                }}
              >
                編輯
              </button>
            </li>
          )
        })}
      </ul>
      <ToastContainer />
    </>
  )
}