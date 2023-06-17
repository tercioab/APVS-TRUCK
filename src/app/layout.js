

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'APVS Truck - Especialista Natalicio Rosa',
  description: 'Natalicio Rosa, seu corretor e facilitador na APVS Truck, a maior associação de proteção veicular do Brasil.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Aqui você pode adicionar outras tags meta conforme necessário */}
    </head>
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
  )
}




