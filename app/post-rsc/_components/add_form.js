'use client'

import React, { useState, useEffect } from 'react'
// useFormState(v18版本) / useActionState(v19)
// 配合伺服器函式使用，內部有狀態對應，只能在CC(客戶端元件)中使用
import { useFormState } from 'react-dom'
import { addPost } from '../_actions'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function AddForm() {
  // [sf回應狀態, 表單動作] = useFormState(sf伺服器函式, 初始狀態)
  const [state, formAction] = useFormState(addPost, null)

  console.log(state)
  // 宣告
  const router = useRouter()

  // 控制要跳出訊息，與重新載入RSC的資料
  useEffect(() => {
    if (state?.status === 'success') {
      // 呈現土司訊息
      toast.success(state?.message)
      // 重新整理(重新渲染RSC列表)
      router.refresh()
    }

    if (state?.status === 'error') {
      // 呈現土司訊息
      toast.error(state?.message)
    }
  }, [state])

  return (
    <>
      <form action={formAction}>
        標題:
        <input type="text" name="title" required />
        <br />
        內容:
        <textarea name="content" required />
        <br />
        <button type="submit">新增</button>
      </form>
      <ToastContainer />
    </>
  )
}