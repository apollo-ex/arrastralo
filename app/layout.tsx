import { Syne, Outfit } from 'next/font/google'
import Providers from './providers'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata = {
  title: 'Arrástralo',
  description: 'Marketplace de arrastre portuario — sin intermediarios',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
