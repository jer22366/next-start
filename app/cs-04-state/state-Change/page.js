'use client'

import { useState } from 'react'

export default function StateChangePage() {
  const [user, setUser] = useState({
    name: '花花',
    profile: {
      phone: '0911123123',
      address: {
        city: '桃園市',
      },
    },
  })

  return (
    <>
      <h1>狀態更新拷貝說明範例</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      <button
        onClick={() => {
          // 因為name在第一層，所以淺拷貝就足夠
          const nextUser = { ...user, name: '阿吉' }
          setUser(nextUser)
        }}
      >
        更動姓名(name)為「阿吉」
      </button>
      <br />
      <button
        onClick={() => {
          // 因為city在第三層，所以需要深拷貝(或拷貝到第3層)
          // 狀態變動三步驟之1. 從目前的狀態拷貝出一個新的複本(物件/陣列)
          const nextUser = JSON.parse(JSON.stringify(user))
          // 狀態變動三步驟之2. 在複本(物件/陣列)上作修改
          nextUser.profile.address.city = '新竹市'
          // 狀態變動三步驟之3. 用setState方法設定修改後的複本到狀態中
          setUser(nextUser)
        }}
      >
        更動城市(city)為「新竹市」
      </button>
    </>
  )
}
