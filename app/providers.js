'use client'

// 這個檔案是用來包裹 所有的Provider，這樣我們可以在所有頁面使用context

// 會員認証與授權用
import { AuthProvider } from '@/hooks/use-auth'
// 購物車用
import { CartProvider } from '@/hooks/use-cart'

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
}
