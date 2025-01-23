// 套用全域樣式(bs)
// import '@/styles/globals.scss'

// 套用全域樣式(tailwind-css)
import '@/styles/globals.css'
//3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
import Providers from './providers'
// 導入Preline UI JavaScript loader
import PrelineScript from './preline-script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* 加入Preline UI JavaScript loader */}
        <PrelineScript />
      </body>
    </html>
  )
}