import { Viewport } from 'next'
import Header from '@/components/Header/Header.js'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: '/manifest.json',
  title: 'Shookbox',
  description: 'Listen to your favorite bands!',
}

export const viewport = {
    themeColor: '#0f172a'
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container my-5 px-3 md:px-5">
          {children}
        </div>
      </body>
      </html>
  )
}
