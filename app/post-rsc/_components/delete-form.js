'use client'

import React, { useState, useEffect } from 'react'
// useFormState(v18版本) / useActionState(v19)
// 配合伺服器函式使用，內部有狀態對應，只能在CC(客戶端元件)中使用
import { useFormState } from 'react-dom'
import { deletePost } from '../_actions'

export default function DeleteForm({ postId = 0, setDeleteState = () => {} }) {
  // [sf回應狀態, 表單動作] = useFormState(sf伺服器函式, 初始狀態)
  const [state, formAction] = useFormState(deletePost, null)

  console.log(state)
  // 狀態連鎖，跳出訊息用
  useEffect(() => {
    if (state) {
      setDeleteState(state)
    }
  }, [state])

  return (
    <>
      <form action={formAction}>
        {/*  postId會送到sf伺服器函式中得到 */}
        <input type="hidden" name="postId" value={postId} />
        <button type="submit">刪除</button>
      </form>
    </>
  )
}