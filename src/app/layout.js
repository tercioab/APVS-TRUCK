import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'APVS Truck - Especialista Natalicio Rosa',
  description: 'Natalicio Rosa, seu corretor e facilitador na APVS Truck, a maior associação de proteção veicular do Brasil.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
