import Header from '@/components/Header/Header.js'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shookbox',
  description: 'Listen to your favorite bands!',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container my-10">
          {children}
        </div>
      </body>
      </html>
  )
}
