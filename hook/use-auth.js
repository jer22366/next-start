import { createContext, useContext, useState } from 'react';

// 1.建立與導出他
// 傳入參數是null值是為了在錯誤或失誤時得到的值
//通常是p-c關係建立錯誤造成的，也可以提供預設值
export const AuthContext = createContext(null)

// 設定displlayName可以在瀏覽器的react devtools上看到名稱 有助除錯
// 沒設定的話都是使用`Context` 作為名稱
AuthContext.displayName = 'AuthContext'


// 建立一個自訂的provider元件 自訂這個鉤子所需的context用的狀態
export default function AuthProvider({children}){
   const [user,setUser] = useState({id:0, name:'', email:''})
     // 判斷會員有沒有登入的信號值
     const isAuth = !!user.id
     // 登入函式
     const login = () => {
       setUser({id:1,name:'jeff',email:'jeff@test.com'})
     }
   
     const logout = () => {
       setUser({id:0,name:'',email:''})
     }
   
     return (
       <AuthContext.Provider value={{user,isAuth,login,logout}}>
         {children}
       </AuthContext.Provider>
     )
}

export const useAuth = ( ) => useContext(AuthContext)