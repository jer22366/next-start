'use client'

// import { useContext } from 'react'
// import { AuthContext } from '@/context/auth'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

export default function ProfilePage() {
  // 2. 在任何⼦元件層級深度，使⽤useContext(MyContext)勾⼦讀取它
  const { isAuth, user } = useAuth()

  return (
    <>
      <h1>會員個人資料頁</h1>
      <Link href="/cs-05-props/user/login">登入頁</Link>
      <br />
      <a href="/cs-05-props/user/login">登入頁(a)</a>
      <hr />
      <p>{isAuth ? '已登入' : '未登入'}</p>
      {/* 可選串連(Optional chaining operator) */}
      {/* 一種保護性質的語法 */}
      <p>id={user?.id}</p>
      <p>name={user?.name}</p>
      <p>email={user?.email}</p>
    </>
  )
}
