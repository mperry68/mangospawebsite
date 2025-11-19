import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mango Spray Tan - Premium Heated Spray Tanning',
  description: 'Experience the ultimate in spray tanning comfort with our state-of-the-art heated spray tan technology. Book your appointment today!',
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

