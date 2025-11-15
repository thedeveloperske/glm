import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get Quote Instantly',
  description: 'Get your motor insurance quote instantly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

