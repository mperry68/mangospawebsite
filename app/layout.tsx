import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mango Spray Tan - Premium Heated Spray Tanning',
  description: 'Experience the ultimate in spray tanning comfort with our state-of-the-art heated spray tan technology. Book your appointment today!',
  icons: {
    icon: [
      { url: '/icons/M16x16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icons/M32x32.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icons/M48x48.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/icons/M57x57.ico', sizes: '57x57' },
      { url: '/icons/M144x144.ico', sizes: '144x144' },
    ],
  },
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

