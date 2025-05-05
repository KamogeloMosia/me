import type React from "react"
import type { Metadata } from "next"
import ThemeRegistry from "./ThemeRegistry"
import "./globals.css"

export const metadata: Metadata = {
  title: "SayHalo - AI Assistant",
  description: "Your personal AI assistant for all your needs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="font-montserrat">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
