//3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
import Providers from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
