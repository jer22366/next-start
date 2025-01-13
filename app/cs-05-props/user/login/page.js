'use client'

// import { useContext } from 'react'
// import { AuthContext } from '@/context/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPage() {
  // 定義路由器
  const router = useRouter()

  const { isAuth, login, logout } = useAuth()
  return (
    <>
      <h1>會員登入頁</h1>
      {/* 用Link取代a連結，保持住目前狀態 */}
      <Link href="/cs-05-props/user/profile">個人資料頁</Link>
      <br />
      <a href="/cs-05-props/user/profile">個人資料頁(a)</a>
      <hr />
      <p>{isAuth ? '已登入' : '未登入'}</p>
      {isAuth ? (
        <button onClick={logout}>登出</button>
      ) : (
        <button
          onClick={() => {
            login()

            if (confirm('歡迎，要為您導向個人資料頁嗎？')) {
              router.push('/cs-05-props/user/profile')
            }
          }}
        >
          登入
        </button>
      )}
    </>
  )
}
