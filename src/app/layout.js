import { Inter } from "next/font/google"
import "../styles/globals.css"
import "../styles/animations.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Elle - Genz Ecommerce",
  description: "Elle - Genz Ecommerce",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
