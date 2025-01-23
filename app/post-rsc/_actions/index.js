'use server' // 此檔案為伺服器函式(SF)程式碼，在伺服器端執行

import db from '@/config/mysql'
import { revalidatePath } from 'next/cache'

export async function deletePost(currentState, formData) {
  // 由傳入的表單動作得到formData，可以得到提交的表單資料
  const postId = Number(formData.get('postId'))
  console.log(postId)

  // 驗証範例
  if (!postId) {
    return {
      status: 'error',
      message: '缺少postId',
      payload: { postId },
    }
  }

  // 執行查詢
  const [result] = await db.query(`DELETE FROM post WHERE id = ${postId};`)
  console.log(result)

  // 重新驗証快取，參數為路徑(刷新rsc獲取的資料用)
  // FIXME: 一呼叫後，刪除元件就被移除了，得不到下面回到的狀態
  // revalidatePath('/post-rsc/list')

  // 回傳成功訊息，客戶端元件會接收到狀態中
  return {
    status: 'success',
    message: '刪除成功',
    payload: { postId },
  }
}

export async function addPost(currentState, formData) {
  // 由傳入的表單動作得到formData，可以得到提交的表單資料
  const title = formData.get('title')
  const content = formData.get('content')

  // 驗証範例
  if (!title || !content) {
    return {
      status: 'error',
      message: '缺少必要資料',
      payload: { title, content },
    }
  }

  // 執行查詢

  // 執行查詢
  const [result] = await db.query(
    `INSERT INTO post (title, content) VALUES ('${title}', '${content}');`
  )
  console.log(result)

  // 重新驗証快取，參數為路徑(刷新rsc獲取的資料用)
  // FIXME: 一呼叫後，刪除元件就被移除了，得不到下面回到的狀態
  // revalidatePath('/post-rsc/list')

  // 回傳成功訊息，客戶端元件會接收到狀態中
  return {
    status: 'success',
    message: '新增成功',
    payload: { title, content },
  }
}

export async function updatePost(currentState, formData) {
  // 由傳入的表單動作得到formData，可以得到提交的表單資料
  const title = formData.get('title')
  const content = formData.get('content')
  const postId = Number(formData.get('postId'))
  console.log(postId, title, content)

  // 驗証範例
  if (!title || !content || !postId) {
    return {
      status: 'error',
      message: '缺少必要資料',
      payload: { postId, title, content },
    }
  }

  // 執行查詢

  // 執行查詢
  // 執行查詢
  const [result] = await db.query(
    `UPDATE post SET title = '${title}', content = '${content}' WHERE id = ${postId};`
  )
  console.log(result)

  // 重新驗証快取，參數為路徑(刷新rsc獲取的資料用)
  // FIXME: 一呼叫後，刪除元件就被移除了，得不到下面回到的狀態
  // revalidatePath('/post-rsc/list')

  // 回傳成功訊息，客戶端元件會接收到狀態中
  return {
    status: 'success',
    message: '更新成功',
    payload: { postId, title, content },
  }
}