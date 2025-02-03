import '@/global.css'
import Head from './head'
import { NavbarPage } from '@/components/layout/NavbarPage'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Cognir AI',
  description: 'LLM Sentyment Text Analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <Head />
      <body className='dark overflow-auto'>
        <NavbarPage />
        {children}
        <Footer />
      </body>
    </html>
  )
}
