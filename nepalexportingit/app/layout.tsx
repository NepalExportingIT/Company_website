import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nepal Exporting IT',
  description: 
  'Nepal Exporting IT is a professional technology and digital solutions company dedicated to helping\
  businesses, startups, and organizations establish a strong digital presence. We specialize in web development,\
  mobile app development, graphic design, video editing, IT solutions, and digital marketing services. \
  By combining creativity, technology, and industry expertise, we deliver customized solutions tailored\
  to the unique goals and requirements of each client. Our commitment to quality, innovation, and client\
  satisfaction enables us to create impactful digital experiences that drive growth and success.',
  icons: {
    icon: '/Favicon.png',        // browser tab icon
    apple: '/Favicon.png',       // iOS home screen icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}