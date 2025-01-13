import Menubar from "./_components/menubar"
export default function RootLayout({ children }) {
  return (
    <>
        <Menubar/>
        {children}
    </>
  )
}
