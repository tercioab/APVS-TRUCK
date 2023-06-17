

import './globals.css'
import Header from '../components/layout/Header';


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
        <meta name="keywords" content="seguros de caminhão, seguros de utilitários, seguros veiculares, seguradora de caminhão" />
        <meta name="author" content="natalicio rosa, apvs truck" />
        <meta name="language" content="pt" />
        <meta name="robots" content="index, follow" />

    </head>
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
  )
}




