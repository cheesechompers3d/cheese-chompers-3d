import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Play Cheese Chompers 3D ",
  description: "The ultimate 3D maze adventure with dynamic cheese environments, character customization, and multiplayer challenges. Download now!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}

import './globals.css'
