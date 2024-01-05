import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignedIn, } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import { Suspense } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Puroflow App',
  description: 'Automating Azure tasks with forms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='p-4'>
        <body className={inter.className}>
        <SignedIn>
          <Navbar />
        </SignedIn>
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
