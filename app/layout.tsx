import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'fatCrack',
  description: 'Your New Experience With Our Fat Crack',
  generator: 'Gestone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
