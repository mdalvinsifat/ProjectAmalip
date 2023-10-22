"use client"
import './globals.css'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  useEffect(()=>{
if(typeof window !== "undefined"){
  require('bootstrap/dist/js/bootstrap.min.js')
}
  },[])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
