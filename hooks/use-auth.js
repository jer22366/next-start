// 1.建⽴與導出它
import { createContext, useContext, useState } from 'react'

// 傳入參數是null值是為了在錯誤或失敗時得到的值，
// 通常是p-c關係建立錯誤造成的，也可以提供預設值
const AuthContext = createContext(null)

// 設定displayName可以在瀏覽器的react devtools上看到名稱，有助於除錯
// 沒設定的話都是使用`Context`作為名稱
AuthContext.displayName = 'AuthContext'

// 建立一個Provider元件，自訂這個勾子所需的context用的狀態
export function AuthProvider({ children }) {
  const defaultUser = { id: 0, username: '', name: '', email: '' }
  // 這是一個會員狀態，初始值是defaultUser
  const [user, setUser] = useState(defaultUser)
  // 判斷會員有沒有登入的信號值
  const isAuth = !!user.id
  // 登入函式
  const login = () => {
    setUser({
      id: 1,
      username: 'harry',
      name: '哈利',
      email: 'herry@gmail.com',
    })
  }
  // 登出函式
  const logout = () => {
    setUser(defaultUser)
  }

  // context套用第3步改到這裡來，提供value屬性傳出到所有的後代元件能獲取
  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 這是一個自訂的hook，它是一個函式，沒有參數，回傳值是useContext(AuthContext)。
// 這個hook是設計專門用來讀取AuthContext的值，閱讀性較佳。
// 注意: 需要使用TypeScript或是JSDoc來定義回傳值的類型，才能在編輯器中有提示或自動完成功能。
/**
 *
 * useAuth是一個hook，是設計專門用來讀取AuthContext的值的勾子。
 *
 * @typedef {Object} Auth
 * @property {number} id
 * @property {string} username
 * @property {string} name
 * @property {string} email
 *
 * @returns {{user: {id: number, username: string, name: string, email: string}, isAuth: boolean, login: Function, logout: Function}}
 */
export const useAuth = () => useContext(AuthContext)
